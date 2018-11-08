import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from './redux/todos.actions'

class App extends Component {
  state = { newTodo: '' }
  handleChange = e => this.setState({ newTodo: e.target.value })
  render() {
    let listOfTodos = this.props.todos.map(todo =>
      <li key={todo.id}>
        {todo.title}
        <button onClick = {() => this.props.removeTodo(todo.id)}>Delete</button>
      </li>
    )
    return (
      <div className="App">
        <p>
          New Todo:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button onClick = {()=> this.props.addTodo(this.state.newTodo)}>Submit</button>
        </p>
        <h3>Todo List:</h3>
        <ul>{listOfTodos}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps, {addTodo , removeTodo})(App)
