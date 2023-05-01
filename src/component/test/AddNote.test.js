import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddNote from '../AddNote';

describe('AddNote component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<AddNote />);
    expect(getByTestId('add-note')).toBeInTheDocument();
  });

  it('update the notes state when typing in the title input', () => {
    const { getByLabelText } = render(<AddNote />);
    const titleInput = getByLabelText('Enter Titel');

    fireEvent.change(titleInput, { target: { value: 'Note Title' } });
    expect(titleInput).toHaveValue('Note Title');
  });

  it('update the notes state when typing in the text input', () => {
    const { getByLabelText } = render(<AddNote />);
    const textInput = getByLabelText('Type to add a Note');

    fireEvent.change(textInput, { target: { value: 'Note text' } });
    expect(textInput).toHaveValue('Note text');
  });

});
