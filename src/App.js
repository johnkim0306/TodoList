import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import WebSpeech from './components/WebSpeech';
import WebText from './components/WebText';
import Header from './components/Header'; 
import Todo from './components/Todo';
import NotesList from './components/NotesList';
import Search from './components/Search';
import List from './components/List.jsx';
import './App.css';

const App = () => {
  const [newTodo, setNewTodo] = useState();
  const [modeCheck, setmodeCheck] = useState('false');
  const [savedNotes, setSavedNotes] = useState(() => {
    const cachedNotes = JSON.parse(localStorage.getItem('savedNotes'));
    return cachedNotes || [
      {
        id: nanoid(),
        text: 'This is my first note!',
        date: '15/04/2021',
      },  
      {
        id: nanoid(),
        text: 'This is my second note!',
        date: '25/04/2021',
      }
    ];
  });
  const [searchText, setSearchText] = useState('');
  const [whiteMode, setwhiteMode] = useState(false);

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addNote = (text) => {
    const currentDate = new Date().toLocaleString();
    const newNote = {
      id: nanoid(),
      text,
      date: currentDate
    }
    setSavedNotes([...savedNotes, newNote])
  }

  const deleteNote = (id) => {
    setSavedNotes((notes) => notes.filter((note) => note.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes))
  }, [savedNotes])

  useEffect(()=> {
    const cachedNotes = JSON.parse(localStorage.getItem("savedNotes"));
    if (cachedNotes) {
      setSavedNotes(cachedNotes);
    }
  }, []);

  return (
    <div className={whiteMode ? 'dark-mode' : 'App'}>
      <Header modeCheck={modeCheck} setmodeCheck={setmodeCheck} handleTogglewhiteMode={setwhiteMode} />
      <div className="container">
        <Search handleSearchNote={setSearchText}/>
        <NotesList savedNotes={savedNotes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
        <div className="container">
          <div className="app__left">{modeCheck ? <WebSpeech savedNotes={savedNotes} setSavedNotes={setSavedNotes} /> : <WebText savedNotes={savedNotes} setSavedNotes={setSavedNotes} />}</div>
          <div className="app__right">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
