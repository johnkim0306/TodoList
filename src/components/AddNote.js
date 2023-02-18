import { useState } from 'react'

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if (event.target.value.length <= characterLimit) {
          setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if(noteText.trimEnd().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    const remainingChars = characterLimit - noteText.length;

    return (
        <div className='note new'>
            <textarea name="noteText" cols="10" rows="8" placeholder='Type to add a note...' value={noteText} onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>{remainingChars} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote