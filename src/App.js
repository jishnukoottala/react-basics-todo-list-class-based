import React from "react";
import "./App.css";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Header from "./Header";
import Container from "@material-ui/core/Container";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Learn React",
          completed: false
        },
        {
          id: 2,
          title: "Learn .net",
          completed: true
        },
        {
          id: 3,
          title: "Learn D365",
          completed: false
        }
      ]
    };
  }

  addTodo = todo => {
    console.log(todo);

    let todos = this.state.todos;

    todos.push(todo);
    this.setState({
      todos
    });
  };

  updateTodo = id => {
    // this.setState({});
    console.log("id ", id);

    let todos = this.state.todos;
    let newTodos = todos.map(todo => {
      if (id === todo.id) {
        return {
          id: todo.id,
          completed: !todo.completed,
          title: todo.title
        };
      } else {
        return todo;
      }
    });

    console.log("newToddos - ", newTodos);

    this.setState({
      todos: newTodos
    });
  };

  deleteTodo = id => {
    console.log("id is --", id);
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </Container>
    );
  }
}

export default App;
