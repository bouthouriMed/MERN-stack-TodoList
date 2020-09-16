import { GET_TODOS, ADD_TODO, DELETE_TODO } from "./actionsType";
import axios from "axios";

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

export const deleteTodo = (id) => dispatch => {
    axios.delete(`/api/todos/${id}`)
        .then(()=> dispatch({
            type:DELETE_TODO,
            payload:id
        }))
        .catch(err => console.log(err))
};

export const addTodo = newTodo => dispatch => {
    axios.post("/api/todos", newTodo)
        .then(res => dispatch({
            type:ADD_TODO,
            payload:res.data
        }))
};

// export const editTodo = (id,newTodo) => dispatch => {
//     axios.put(`/api/todos/${id}`,newTodo)
//         .then(() => dispatch({
//             type:EDIT_TODO,
//             payload: res.data
//         }))
// }