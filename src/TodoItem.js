import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Fab from "@material-ui/core/Fab";
import DelIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function TodoItem(props) {
  function getStyle(completed) {
    const baseStyle = {
      fontFamily: "Shadows Into Light Two, cursive",
      fontWeight: "bold"
    };
    if (completed) {
      return {
        textDecoration: "line-through",
        ...baseStyle
      };
    } else {
      return {
        textDecoration: "none",
        ...baseStyle
      };
    }
  }

  return (
    <div className="todoItem">
      <ListItem>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                style={{ cursor: "pointer" }}
                checked={props.completed ? true : false}
                onChange={e => {
                  props.updateTodo(props.id);
                }}
                value=""
              />
            }
          />
          {/* <input
          type="checkbox"
          checked={props.completed ? true : false}
          onChange={e => {
            props.updateTodo(props.id);
          }}
        /> */}
        </Box>
        <ListItemText>
          <span style={getStyle(props.completed)}>{props.title}</span>{" "}
        </ListItemText>

        <Box>
          <Fab
            color="secondary"
            aria-label="edit"
            size="small"
            onClick={() => props.deleteTodo(props.id)}
          >
            <DelIcon style={{ cursor: "pointer" }} />
          </Fab>
          {/* <button onClick={() => props.deleteTodo(props.id)}>delete</button> */}
        </Box>
      </ListItem>
    </div>
  );
}

export default TodoItem;
