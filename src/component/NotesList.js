import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
export default function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="container">
      <h3 className="h3 my-3">Add Your Notes!</h3>
      <div className="notes-container">
        <AddNote handleAddNote={handleAddNote} />
        <div className="col-sm-6 note-display">
          <hr className="hrLine" />
          <div className="notes-header">
            <h3>Notes!</h3>
          </div>

          <div className="notes" data-testid="notes-list">
            {/* add ur items here */}
            {notes.map((note) => (
              <Note
                id={note.id}
                titel={note.titel}
                text={note.text}
                show={note.show}
                handleDeleteNote={handleDeleteNote}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
