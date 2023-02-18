import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const synth = window.speechSynthesis;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = true
recognition.interimResults = true
recognition.lang = 'en-US'

const WebText = ({setSavedNotes, savedNotes}) => {
  const [text, setText] = useState('Hello, how are you?');


  const handleClick = () => {
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
    <div>
      <div className="box">
        <h1>Speech Synthesis</h1>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button onClick={handleClick} >Speak</button>
      </div>
      <div className="box">
        <h2>Notes</h2>
        <ul>
          {savedNotes.map((n, index) => (
            <li key={index}>{n.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WebText;