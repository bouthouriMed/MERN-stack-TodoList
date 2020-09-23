import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FINISH_TODO, DELETE_ALL, TODOS_LOADING
} from "./actionsType";
import axios from "axios";
import { tokenConfig } from "./authActions";

export const getTodos = () => (dispatch) => {
  axios
    .get("/api/todos")
    .then((res) =>
      dispatch({
        type: GET_TODOS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const deleteTodo = (id) => (dispatch) => {
  axios
    .delete(`/api/todos/${id}`)
    .then(() =>
      dispatch({
        type: DELETE_TODO,
        payload: id,
      })
    )
    .catch((err) => console.log(err));
};

export const addTodo = (newTodo) => (dispatch) => {
  axios.post("/api/todos", newTodo).then((res) =>
    dispatch({
      type: ADD_TODO,
      payload: res.data,
    })
  );
};


export const editTodo = (id,newTodo) => dispatch => {
  axios.put(`/api/todos/${id}`,newTodo)
  .then((res) => dispatch({
    type:EDIT_TODO,
    payload: res.data
  }))
  .then(() => dispatch(getTodos()) )
  
}

export const finishTodo = id => dispatch => {
  axios.put(`/api/todos/todo/${id}`)
  .then(res => dispatch({
    type:FINISH_TODO,
    payload: res.data
  }));
  dispatch(getTodos())
};

export const deleteAll = () => (dispatch, getState) => {
  // dispatch(setTodosLoading());
  axios.delete("/api/todos", tokenConfig(getState)).then((res) =>
    dispatch({
      type: DELETE_ALL,
      payload: res.data,
    })
  );
};

// export const setTodosLoading = () => ({
//   type: TODOS_LOADING,
// });