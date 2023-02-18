import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({savedNotes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className="notes-list">
            {savedNotes.map(({ id, text, date }) => (
                <Note key={id} {...{ id, text, date, handleDeleteNote }} />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;