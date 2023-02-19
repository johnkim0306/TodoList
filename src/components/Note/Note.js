import {MdDeleteForever} from 'react-icons/md';
import './note.scss'

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note__footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size= '1.3em' type='button'/>      
            </div>    
        </div>
    )
}

export default Note;