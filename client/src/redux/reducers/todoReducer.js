import {
  ADD_TODO,
  GET_TODOS,
  DELETE_TODO,
  DELETE_ALL,
  FINISH_TODO,
  EDIT_TODO,
} from "../actions/actionsType";

const initialState = {
  todos: [],
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

    case DELETE_ALL:
      return {
        ...state,
        todos: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload.id
            ? { content: action.payload.content, isComplete: false }
            : todo
        ),
      };

    case FINISH_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
      };

    default:
      return state;
  }
}

export default rootReducer;
