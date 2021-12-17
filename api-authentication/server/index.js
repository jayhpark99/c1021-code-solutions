require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning "userId", "username", "createdAt"
      `;
      const params = [username, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/auth/sign-in', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }
  const sql = `
  select "userId", "hashedPassword"
  from "users"
  where "username" = $1
  `
  const params = [username]
  db.query(sql, params)
    .then(result => {
      if (result.rows.length === 0) {
        throw new ClientError(401, 'invalid login')
      }
      const hashedPassword = result.rows[0].hashedPassword
      argon2
        .verify(hashedPassword, password)
        .then(match => {
          if (match === false) {
            throw new ClientError(401, 'invalid login')
          }
          const user = {
            userId: result.rows[0].userId,
            username: username
          }
          const token = jwt.sign(user, process.env.TOKEN_SECRET);
          res.status(200).send({user, token})
        })
        .catch(error => next(error))
    })
    .catch(error => next(error))
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
