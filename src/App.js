import logo from './logo.svg';
import './App.css';
import List from './List.jsx';
import { Component, useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState(['test', 'swag']);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo])
  }

  useEffect( ()=> {
    console.log("Rendering");
  }, [todos])

  return (
    <>
    <h1>TodoList</h1>
    <form action="">
      <input type="text" name="" onChange={changeInputData}/>
      <button onClick={addTodo}>What are you doing today?</button>
    </form>

    <List todos={todos} />
    </>
  )
}

export default App;
