import React, { useEffect, useState } from 'react';

const synth = window.speechSynthesis;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const  WebSpeech = () => {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(false);
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(()=> {
    handleListen()
  }, [isListening])

  const handleListen = () => {
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
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
  }

  return (
    <div className='container'>
      <div className="box">
        <h2>Current Note</h2>
        {isListening? <span>:mic</span> : <span>STOP</span>}
        <button onClick={handleSaveNote} disabled={!note}>
          Save Note
        </button>
        <button onClick={() => setIsListening(prevState => !prevState)}>
          Start/Stop
        </button>
        <p>{note}</p>
      </div>
      <div className="box">
        <h2>Notes</h2>
        {savedNotes.map(n => (
          <p key={n}>{n}</p>
        ))}
      </div>
    </div>
  );
}

export default WebSpeech;