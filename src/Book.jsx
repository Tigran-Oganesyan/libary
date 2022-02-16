/* eslint-disable react/prop-types */
import React from 'react';

export default function Book({ activeBook, navigate }) {
  return (
    <div className="modal">
      <img className="book__img_page" src={activeBook.volumeInfo.imageLinks !== undefined ? activeBook.volumeInfo.imageLinks.thumbnail : ''} alt={activeBook.title} />
      <div>
        <h5 className="book__title">{activeBook.volumeInfo.title}</h5>
        <p className="book__categories">{activeBook.volumeInfo.categories}</p>
        <p className="book__authors">{activeBook.volumeInfo.authors}</p>
        <p>{activeBook.volumeInfo.description}</p>
      </div>
      <button type="button" onClick={() => navigate('./')}>Close</button>
    </div>
  );
}
