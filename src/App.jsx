import './index.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Home';
import Book from './Book';

function App() {
  const [books, setBooks] = useState('');
  const [result, setResult] = useState([]);
  const apiKey = 'AIzaSyAdAXOVoEdXihyrI7oHek5z0d7Yzfg8hvI';
  const [visible, setVisible] = useState(10);
  const [activeBook, setActiveBook] = useState({});
  const [activeCategories, setActiveCategories] = useState('All');
  const [sort, setSort] = useState('newest');
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={(
          <Home
            navigate={navigate}
            setBooks={setBooks}
            books={books}
            apiKey={apiKey}
            setResult={setResult}
            setSort={setSort}
            sort={sort}
            activeCategories={activeCategories}
            setActiveCategories={setActiveCategories}
            result={result}
            setActiveBook={setActiveBook}
            setVisible={setVisible}
            visible={visible}
          />
        )}
      />
      <Route
        path="book"
        element={(
          <Book
            navigate={navigate}
            activeBook={activeBook}
          />
        )}
      />
    </Routes>
  );
}

export default App;
