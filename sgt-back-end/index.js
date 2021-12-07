const express = require('express')
const app = express()
const pg = require('pg')
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const JSONMiddleware = express.json();
app.use('/api/grades', JSONMiddleware);

app.get('/api/grades', (req, res) => {
  const sql = `
  select "gradeId",
         "name",
         "course",
         "score",
         "createdAt"
    from "grades"
  `
  db.query(sql)
    .then(result => {
      const grades = result.rows
      res.status(200).json(grades)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({
        error: 'an unexpected error occured.'
      })
  })
})

app.post('/api/grades', (req, res) => {
  const score = Number(req.body.score)
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'name, course, body are required fields.'
    })
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'score must be an positive integer between 0 and 100'
    })
    } else {
    const sql = `
    insert into "grades" ("name","course", "score")
    values ($1, $2, $3)
    returning *
    `
    const params = [req.body.name, req.body.course, score]
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0]
        res.status(201).json(grade)
      })
      .catch(err => {
        console.err(err)
        res.status(500).json({
          error: 'an unexpected error occured.'
        })
      })
    }
})

app.put('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  const score = Number(req.body.score)
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer.'
    })
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'score must be an positive integer between 0 and 100'
    })
  } else {
    if (!req.body.name || !req.body.course || !req.body.score) {
      res.status(400).json({
        error: 'name, course, body are required fields.'
      })
    } else {
      const sql = `
      update "grades"
         set "name" = $1,
             "course" = $2,
             "score" = $3
       where "gradeId" = $4
       returning *
      `
      const params = [req.body.name, req.body.course, score, id]
      db.query(sql, params)
        .then(result => {
          if (result.rows.length === 0) {
            res.status(404).json({
              error: `grade with id ${id} does not exist`
            })
          } else {
            const grade = result.rows[0]
            res.status(200).json(grade)
          }
        })
        .catch(err => {
          console.error(err)
          res.status(500).json({
            error: 'an unexpected error occured.'
          })
        })
    }
  }
})

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer.'
    })
  } else {
    const sql = `
    delete from "grades"
          where "gradeId" = ${id}
      returning *
    `
    db.query(sql)
      .then(result => {
        if (result.rows.length === 0) {
          res.status(404).json({
            error: `grade with id ${id} does not exist`
          })
        } else {
            res.sendStatus(204)
          }
        })
      .catch(err => {
        console.error(err)
        res.status(500).json({
          error: 'an unexpeceted error occured.'
        })
      })
  }
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
