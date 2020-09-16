import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todosActions'

function AddTodo() {
     
        const [todo, setTodo] = useState("")
       const dispatch = useDispatch()

        const handleChange = (e) => {
            setTodo(e.target.value)
        }

        const handleSubmit = (e) => {
            e.preventDefault();

            const newTodo = {
                todo : todo
            }
            
            dispatch(addTodo(newTodo));
            
            setTodo("")
        }
       
        
        return (
            <div>

              <form onSubmit={handleSubmit}>
                  <label> Add to do </label>
                  <input onChange={handleChange} type="text" placeholder="Add todo here" value={todo}></input>
              </form>

            </div>
        )
    
}

export default AddTodo
