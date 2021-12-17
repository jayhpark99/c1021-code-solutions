import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
    .then(response => response.json())
    .then(todos => this.setState({ todos }))
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
    .then(response => response.json())
    .then(newTodo => this.setState({
      todos: this.state.todos.concat(newTodo)
    }))
  }

  toggleCompleted(todoId) {
    const todo = this.state.todos.find(todo => todo.todoId === todoId)
    const todoIndex = this.state.todos.indexOf(todo)
    const updatedTodo = { isCompleted: !todo.isCompleted }
    fetch(`/api/todos/${todoId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedTodo)
      })
      .then(response => response.json())
      .then(updatedTodo => {
        const copyTodos = this.state.todos.slice()
        copyTodos[todoIndex] = updatedTodo
        this.setState({ todos: copyTodos })
        }
      )
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
