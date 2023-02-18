import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import List from './List';

const synth = window.speechSynthesis;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = true
recognition.interimResults = true
recognition.lang = 'en-US'

const WebText = ({ setSavedNotes, savedNotes, handleDeleteNote }) => {
  const [text, setText] = useState('Hello, how are you?');

  const handleSpeak = () => {
    if (text.trim() === '') {
      return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'ja-JP';
    synth.speak(speech, true);

    const currentDate = new Date().toLocaleString();
    const newNote = { id: nanoid(), text: text, date: currentDate };
    setSavedNotes((prevNotes) => [...prevNotes, newNote]);
    setText('');
  };

  return (
    <div className="web__container">
      <div className="box">
        <h1>Speech Synthesis</h1>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button onClick={handleSpeak} >Speak</button>
      </div>
      <div className="box">
        <h2>Notes</h2>
        <ul>
            {savedNotes.map(todo => (
              <List key={todo.id} id={todo.id} text={todo.text} date={todo.date} handleDeleteNote={handleDeleteNote} />
            ))}
          </ul>
      </div>
    </div>
  );
}

export default WebText;