import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './component/NotesList';
import Navbar from './component/Navbar';

const App = () => {

	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const dbNotes = JSON.parse(localStorage.getItem('user-notes'));
		if (dbNotes) {
			setNotes(dbNotes);
		}
	}, [])

	const addNote = (titel, text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			titel: titel,
			text: text,
			date: date.toLocaleDateString(),
		}
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
		window.localStorage.setItem('user-notes', JSON.stringify(newNotes));

	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
		window.localStorage.setItem('user-notes', JSON.stringify(newNotes));
	}


	return (
		<>
			<Navbar />
			<div className="container">
				<NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
			</div>

		</>
	);

};

export default App;