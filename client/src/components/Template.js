import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import {
  getTodos,
  deleteTodo,
  finishTodo,
} from "../redux/actions/todosActions";
import EditTodo from "./EditTodo";

function Template() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);

  useEffect(() => {
    dispatch(getTodos());
    console.log(todos);
  }, []);

 

  const todoList = todos ? (
    todos.map((todo) => {
      return (
        <div
          className="collection-item"
          key={todo._id}
          style={todo.isComplete ? { backgroundColor: "lightGreen" } : null}
        >
          <span
            className="mySpan"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {todo.content}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
              }}
            >
              <EditTodo id={todo._id} todoContent={todo.content} />
              <Button
                onClick={() => dispatch(deleteTodo(todo._id))}
                className="btn waves-effect waves-light btn-small"
                type="submit"
                name="action"
              >
                Del
              </Button>

              <Button
                onClick={() => dispatch(finishTodo(todo._id))}
                className="btn waves-effect waves-light btn-small "
                type="submit"
                name="action"
                style={
                  todo.isComplete
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "green" }
                }
              >
                {todo.isComplete ? "Undo" : "Done"}
              </Button>
            </div>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no todo's left </p>
  );

  return (
    <div className="todos collection" style={{ borderRadius: "3px" }}>
      {todoList}
    </div>
  );
}

export default connect(null, { getTodos, deleteTodo, finishTodo })(Template);
