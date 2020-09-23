import React from "react";
import { Button, Container } from "reactstrap";
import AddTodo from "./AddTodo";
import Template from "./Template";
import Navbar from './Navbar'
import { useDispatch } from "react-redux";
import { deleteAll } from "../redux/actions/todosActions";

function Home() {
    const dispatch = useDispatch()

    const removeAll = () => {
        dispatch(deleteAll());
      };
  return (
    
      <Container >
        <Navbar/>
          <h1 style={{color:'white',textAlign:'center'}}> My todo list </h1>
        <Template />
        <AddTodo />
        <Button
        color="danger"
        size="sm"
        className="removeAll-btn"
        onClick={removeAll}
      >
        Delete all
      </Button>
      </Container>
   
  );
}

export default Home;
