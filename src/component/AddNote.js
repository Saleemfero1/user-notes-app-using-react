import React from 'react'
import { useState } from 'react';
export default function AddNote({ handleAddNote }) {

  const textCharLimit = 200;
  const titleCharLimit = 20;
  const [notes, setNotes] = useState({
    titel: "",
    text: ""
  });

  const onChangeTitel = (event) => {
    if (titleCharLimit - event.target.value.length >= 0) {
      setNotes({ ...notes, titel: event.target.value });
    }
  };

  const onChangeText = (event) => {
    if (textCharLimit - event.target.value.length >= 0) {
      setNotes({ ...notes, text: event.target.value });
    }

  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (notes.text.trim().length > 0) {
      handleAddNote(notes.titel, notes.text);
      setNotes({ ...notes, text: '' });
    }
  };

  return (
    <div className="col-sm-5 notes-writer" data-testid="add-note">
      <form onSubmit={onSubmitHandler}>
        <div className="input-group has-validation">
          <span className="input-group-text"> Titel</span>
          <div className="form-floating " >
            {/*!--is-invalid*/}
            <input
              type="text"
              className="form-control "
              id="floatingInputGroup2"
              placeholder="Username"
              onChange={onChangeTitel}
              value={notes.titel}
              required
            />
            <label htmlFor="floatingInputGroup2">Enter Titel </label>
          </div>
          <div className="invalid-feedback">Please Enter Titel.</div>
          {/*!--nvalid-feedback*/}
        </div>
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={onChangeText}
            value={notes.text}
          ></textarea>
          <p>{textCharLimit - notes.text.length} remaining</p>
          <label htmlFor="floatingTextarea">Type to add a Note</label>
        </div>

        <button type="submit" className="btn btn-success">
          Save Notes
        </button>
      </form>
    </div>
  );
}
