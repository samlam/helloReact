import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {TodoForm} from './components/todo/TodoForm'
import {TodoForm, TodoList} from './components/todo'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos:[
                {id:1, name: 'learn JSX', isComplete: true},
                {id:2, name: 'build app', isComplete: false},
                {id:3, name: 'ship it', isComplete: false}
            ],
            currentTodo:''
        }
        this.handleInputChange = this.ChangeInput.bind(this)
    }
    
    ChangeInput (e){
        this.setState({
           currentTodo: e.target.value 
        }) ;
    }
    render(){
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>React Todos</h2>
            </div>
            <div className="Todo-App">
                <TodoForm 
                    handleInputChange={this.handleInputChange}
                    currentTodo={this.state.currentTodo} />
                <TodoList todos={this.state.todos}/>

            </div>
          </div>
        )
    }
}

export default App