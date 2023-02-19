import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

import WebSpeech from './components/WebAPI/WebSpeech';
import WebText from './components/WebAPI/WebText';
import Header from './components/Header/Header'; 
import NotesList from './components/NotesList';
import Search from './components/Search';
import Footer from './components/Footer/Footer';

const App = () => {
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

  const addNote = (text) => {
    const newNote = { id: nanoid(), text, date: `${new Date().toLocaleString()}` }
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
    <div className={whiteMode ? 'white-mode' : 'App'}>
      <div className="container">
        <Header modeCheck={modeCheck} setmodeCheck={setmodeCheck} handleTogglewhiteMode={setwhiteMode} />
        <Search handleSearchNote={setSearchText}/>
        <NotesList savedNotes={savedNotes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
        <div className="app__container">
          <div className="app__bottom">{modeCheck ? <WebSpeech savedNotes={savedNotes} setSavedNotes={setSavedNotes} handleDeleteNote={deleteNote} /> : <WebText savedNotes={savedNotes} setSavedNotes={setSavedNotes} handleDeleteNote={deleteNote} />}</div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
