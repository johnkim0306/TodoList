import logo from './logo.svg';
import './App.css';
import List from './List.jsx';
import { Component, useState, useEffect } from 'react';
import WebSpeech from './WebSpeech';
import WebText from './WebText';
import Header from './Header';
import Todo from './Todo';

const App = () => {
  const [newTodo, setNewTodo] = useState();
  const [modeCheck, setmodeCheck] = useState('false');
  const [savedNotes, setSavedNotes] = useState([]);

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  return (
    <div className='App'>
      <Header modeCheck={modeCheck} setmodeCheck={setmodeCheck} />
      {modeCheck ? <WebSpeech savedNotes={savedNotes} setSavedNotes={setSavedNotes} /> : <WebText />}
      <Todo />
    </div>
  )
}

export default App;
