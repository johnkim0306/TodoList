import React, { useEffect, useState, useCallback } from 'react';
import { nanoid } from 'nanoid';

//const synth = window.speechSynthesis;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();
mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const  WebSpeech = ({setSavedNotes, savedNotes}) => {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState('');

  useEffect(()=> {
    handleListen()
  }, [isListening])

  const handleListen = useCallback(() => {
    if(isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopping mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    };

    mic.onresult = event => {
      const transcript = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      };
    };
  }, [isListening]);

  const handleSaveNote = useCallback(() => {
    const currentDate = new Date().toLocaleString();
    const newNote = { id: nanoid(), text: note, date: currentDate };
    setSavedNotes(prevSavedNotes => [...prevSavedNotes, newNote]);
    setNote('');
  }, [note, setSavedNotes])

  return (
    <>
      <h1>Voice Notes</h1>
      <div className="container">
        <div className="box">
          <h2>Current Note</h2>
          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button onClick={() => setIsListening(prevState => !prevState)}>
            {isListening ? 'Stop' : 'Start'}
          </button>
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Notes</h2>
          <ul>
            {savedNotes.map(note => (
              <li key={note.id}>{note.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default WebSpeech;