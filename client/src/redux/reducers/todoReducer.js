import { ADD_TODO, GET_TODOS, DELETE_TODO } from "../actions/actionsType";

const initialState = {
  todos: [],
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    default:
      return state;
  }
}

export default rootReducer;
