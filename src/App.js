import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos/Todos';
import Header from './components/layout/Header'

class App extends Component {
  state = {
    todos: 
    [
      {
        id: 1,
        title: "Taking out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Make dinner for the gf",
        completed: true
      },
      {
        id: 3,
        title: "Play Valorant with the boys",
        completed: false
      }
    ]
  }
  //Toggle Complete
    markComplete = (id) => {
      this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      }
      )})
    }
    //Delete todo
    delTodo = (id) => {
      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }
    
  render (){
  return (
    <div className="App">
      <Header/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
    </div>
    );
  }
}

export default App;
