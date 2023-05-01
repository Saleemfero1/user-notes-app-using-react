import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Notes from '../Note';

describe('Notes component', () => {
  const props = {
    id: 1,
    title: 'My Note',
    text: 'This is the note text',
    show: false,
    handleDeleteNote: jest.fn(),
  };


  test('renders note text when show button is clicked', () => {
    const { getByText, getByTestId } = render(<Notes {...props} />);
    const showMoreBtn = getByTestId('showMoreBtn');
    fireEvent.click(showMoreBtn);
    expect(getByText(props.text)).toBeInTheDocument();
  });

  test('calls handleDeleteNote function when delete button is clicked', () => {
    const { getByTestId } = render(<Notes {...props} />);
    const deleteBtn = getByTestId('delete-button');
    fireEvent.click(deleteBtn);
    expect(props.handleDeleteNote).toHaveBeenCalledWith(props.id);
  });
});
