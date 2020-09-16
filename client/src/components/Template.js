import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getTodos, deleteTodo } from "../redux/actions/todosActions";
import EditTodo from "./EditTodo";

function Template() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);


  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const todoList = todos ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo._id}>
          <span
            className="mySpan"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {todo.todo}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
              }}
            >
              <EditTodo/>
              <button
                onClick={() => dispatch(deleteTodo(todo._id))}
                className="btn waves-effect waves-light btn-small"
                type="submit"
                name="action"
              >
                Del
              </button>
              {/* <button
                onClick={() => handleDone(todo.id)}
                className="btn waves-effect waves-light btn-small done"
                type="submit"
                name="action"
                style={
                  todo.isComplete
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "green" }
                }
              >
                {todo.isComplete ? "Undo" : "Done"}
              </button> */}
            </div>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no todo's left </p>
  );

  return <div className="todos collection">{todoList}</div>;
}

export default connect(null, { getTodos, deleteTodo })(Template);
