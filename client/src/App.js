import React, { Component } from "react";
import Template from "./components/Template";
import AddTodo from "./components/AddTodo";
import "./App.css";

class App extends Component {
  // deleteTodo = (id) => {
  //   let todosF = this.state.todos.filter( todo => {
  //     return todo.id !== id ;
  //   })

  //   this.setState({
  //     todos : todosF
  //   })
  // }

  // addTodo = (todo) => {
  //   const newTodo = {
  //     content : todo , id : Math.random()
  //   }
  //   let todosA = [...this.state.todos,newTodo] ;
  //   this.setState({
  //     todos : todosA
  //   })
  // }

  // handleEdit = (edit,id) => {

  //   const todosE = this.state.todos.map(todo=>
  //     (todo.id===id) ? (
  //       {...todo,content:edit}
  //     ) : (todo)
  //   )
  //  this.setState({
  //    todos : todosE
  //  })
  // console.log(todosE)

  // }

  // handleDone=(id)=>{
  //   const todosD = this.state.todos.map(todo=>
  //     (todo.id===id) ? (
  //       {...todo,isComplete:!todo.isComplete}
  //     ) : (todo)
  //   )
  //  this.setState({
  //    todos : todosD
  //  })
  // }

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text"> My todo list </h1>
        <Template/>
        <AddTodo />
      </div>
    );
  }
}

export default App;
