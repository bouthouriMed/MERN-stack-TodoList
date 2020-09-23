import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./actionsType";

import { returnErrors } from "./errorActions";

//  Check token and laod user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });


  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
      
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};


// Register user
export const register = ({username, email, password}) => dispatch => {
    // headers
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }  
    };

    // Request body
    const body = JSON.stringify({username,email,password});

    axios.post('/api/user', body, config)
        .then(res => dispatch({
            type:REGISTER_SUCCESS,
            payload:{
                token:res.data.token,
                user:res.data.user
            }
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,'REGISTER_FAIL'));
            dispatch({
                type:REGISTER_FAIL
            })
        })
}

// Logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
};


// Login user
export const login = ({ email, password}) => dispatch => {
  // headers
  const config = {
      headers : {
          'Content-Type' : 'application/json'
      }  
  };

  // Request body
  const body = JSON.stringify({email,password});

  axios.post('/api/auth', body, config)
      .then(res => dispatch({
          type:LOGIN_SUCCESS,
          payload:{
              token:res.data.token,
              user:res.data.user
          }
      }))
      .catch(err => {
          dispatch(returnErrors(err.response.data,err.response.status,'LOGIN_FAIL'));
          dispatch({
              type:LOGIN_FAIL
          })
      })
}

// Setup config/headers and token
export const tokenConfig = getState => {
      // Get token from localStorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //  If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
}
