import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import TextField from "@material-ui/core/TextField";

class Todo {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

class TodoForm extends React.Component {
  //   function onSubmit(e) {
  //     e.preventDEfault();
  //     console.log("submit --");
  //   }

  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  onChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newTodo = new Todo(Math.floor(Math.random() * 100), this.state.title);

    this.props.addTodo(newTodo);
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <Container>
        <Box m={2}>
          <form onSubmit={this.onSubmit}>
            <TextField
              id="standard-basic"
              label="Enter Todo"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </form>
        </Box>
      </Container>
    );
  }
}

export default TodoForm;
