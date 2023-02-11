import React from 'react'
import { useState, useEffect } from 'react';
import List from './List.jsx';

const Todo = () => {
    const [todos, setTodos] = useState(['test', 'testing2']);
    const [newTodo, setNewTodo] = useState();
    
    useEffect( ()=> {
        console.log("Rendering");
      }, [todos])

    const changeInputData = (e) => {
        setNewTodo(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, newTodo])
    }

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

export default Todo