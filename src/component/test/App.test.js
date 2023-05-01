import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('App component', () => {
  test('renders Navbar component', () => {
    const { getByText } = render(<App />);
    const navbarElement = getByText(/user Notes/i);
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders NotesList component', () => {
    const { getByTestId } = render(<App data-testid="notes-list"/>);
    const notesListElement = getByTestId('notes-list');
    expect(notesListElement).toBeInTheDocument();
  });

  test('adds a new note to the notesList', () => {
    const { getByLabelText, getByText, getAllByTestId } = render(<App />);
    const titleInput = getByLabelText(/Enter titel/i);
    const textInput = getByLabelText(/Type to add a Note/i);
    const addButton = getByText(/save/i);
    const initialNotesLength = getAllByTestId('add-note').length;

    fireEvent.change(titleInput, { target: { value: 'Test note' } });
    fireEvent.change(textInput, { target: { value: 'Test note text' } });
    fireEvent.click(addButton);

    const newNotesLength = getAllByTestId('add-note').length;
    expect(newNotesLength).toBe(initialNotesLength + 1);
  });

  test('deletes a note from the notesList', () => {
    const { getAllByTestId, getByTestId } = render(<App />);
    const deleteButtons = getAllByTestId('delete-button');
    const initialNotesLength = deleteButtons.length;

    fireEvent.click(deleteButtons[0]);

    const newNotesLength = getByTestId('notes-list').childElementCount;
    expect(newNotesLength).toBe(initialNotesLength - 1);
  });

});

