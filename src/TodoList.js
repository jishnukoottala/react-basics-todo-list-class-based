import React from "react";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";
function TodoList(props) {
  console.log(props);
  return (
    <div>
      {props.todos.map(todo => (
        <List>
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            updateTodo={props.updateTodo}
            id={todo.id}
            deleteTodo={props.deleteTodo}
          />
        </List>
      ))}
    </div>
  );
}

export default TodoList;
