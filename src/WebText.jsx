import React, { useState } from 'react';

const synth = window.speechSynthesis;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = true
recognition.interimResults = true
recognition.lang = 'en-US'

const WebText = () => {
  const [text, setText] = useState('Hello, how are you?');

  const handleClick = () => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'ja-JP'
    synth.speak(speech, true);
  };

  return (
    <div>
      <h1>Speech Synthesis</h1>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={handleClick}>Speak</button>
    </div>
  );
}

export default WebText;