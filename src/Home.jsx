/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';

export default function Home({
  setBooks, books, apiKey, setResult, setSort, sort, activeCategories, setActiveCategories, result, setActiveBook, setVisible, visible, navigate,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${books}subject:${activeCategories}&orderBy=${sort}&key=${apiKey}&maxResults=40`)
      .then((data) => {
        setResult(data.data.items);
        setSort(sort);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <div className="">
          <div className="">
            <input onChange={(event) => setBooks(event.target.value)} className="" placeholder="Type something..." type="text" />
          </div>
          <div className="">
            <input type="submit" value="Search" className="" />
          </div>
        </div>
        <div>
          <select
            value={activeCategories}
            onChange={(event) => {
              setActiveCategories(event.target.value);
            }}
          >
            <option>All</option>
            <option>Art</option>
            <option>Biography</option>
            <option>Computers</option>
            <option>History</option>
            <option>Medical</option>
            <option>Poetry</option>
          </select>
          <select value={sort} onChange={(event) => { setSort(event.target.value); }}>
            <option>relevance</option>
            <option>newest</option>
          </select>
        </div>
      </div>
      <div className="">
        <h3>{result.length}</h3>
        <div className="book__list">
          {result.slice(0, visible).map((book) => (
            <div className="book__card" key={book.id}>
              <img className="book__img" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />
              <h5 className="book__title">{book.volumeInfo.title}</h5>
              <p className="book__categories">{book.volumeInfo.categories}</p>
              <p className="book__authors">{book.volumeInfo.authors}</p>
              <button
                type="button"
                className=""
                onClick={(event) => {
                  event.preventDefault();
                  setActiveBook(book);
                  navigate('./book');
                }}
              >
                Know more
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            setVisible((prevNum) => prevNum + 10);
          }}
        >
          load more
        </button>
      </div>
    </form>
  );
}
