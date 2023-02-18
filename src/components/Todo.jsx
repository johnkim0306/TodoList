import React from 'react'
import { useState, useEffect } from 'react';
import List from './List.jsx';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';

const Todo = () => {
    const [todos, setTodos] = useState(['test', 'testing2']);
    const [newTodo, setNewTodo] = useState();
    
    useEffect( ()=> {}, [todos])

    const handleInputChange  = (e) => {
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
                <input type="text" name="" onChange={handleInputChange } placeholder='Add Todo'/>
                <button onClick={addTodo}><AiOutlinePlus size={30} /></button>
                <button>{<FaRegTrashAlt />}</button>
            </form>
            <ul>
                {todos.map((todo) => (
                <List key={todo.id} todo={todo} />
                ))}
            </ul>
            <p>You have {todos.length} todos</p>
        </>
    )
}

export default Todo