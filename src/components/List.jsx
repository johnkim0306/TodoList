import React from 'react'
import {MdDeleteForever} from 'react-icons/md';

const List = ({id, text, date, handleDeleteNote}) => {
    return (
        <li>
            <div className='list'>
                <p>{text}</p>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size= '1.3em' type='button'/>     
            </div>
        </li>

    )
}

export default List