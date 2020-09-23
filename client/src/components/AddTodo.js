import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todosActions";

function AddTodo() {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      content: content,
      isComplete: false,
    };
    console.log(newTodo);

    dispatch(addTodo(newTodo));

    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Add to do </label>
        <input
            style={{color:'white'}}
          onChange={handleChange}
          type="text"
          placeholder="Add todo here"
          value={content}
        ></input>
      </form>
    </div>
  );
}

export default AddTodo;
