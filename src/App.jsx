import { useState, useEffect } from 'react';
import axios from 'axios';
import ListPage from './page/ListPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FavoritePage from './page/FavoritePage';
import { debounce } from 'lodash';

import { url } from './utils/constants';

function App() {
  /* Fetch Data _________________________________________ */
  const [characters, setCharacters] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  async function fetchData() {
    let allData = [];

    try {
      let currentPage = 1;
      let totalPages = pageNumber;

      while (currentPage <= totalPages) {
        const response = await axios.get(`${url}/?page=${currentPage}`);
        const data = response.data.results;
        allData = [...allData, ...data];
        currentPage++;
      }
      setCharacters(allData);
      setOriginalData(allData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  /* Handle Scroll _____________________________________ */
  useEffect(() => {
    const handleScroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200
      ) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  if (loading) {
    return (
      <div className="text-6xl flex justify-center items-center h-screen inset-0">
        Loading...
      </div>
    );
  }
  /* Return _______________________________________________ */
  return (
    <Router>
      <nav className="flex justify-center items-center bg-green-200 p-4 gap-4 sticky top-0 text-2xl shadow-lg">
        <Link
          className="hover:-rotate-6 duration-500 hover:scale-110"
          to="/"
        >
          Home
        </Link>
        <Link
          className="hover:rotate-6 duration-500 hover:scale-110"
          to="/bookmark"
        >
          Bookmark
        </Link>
      </nav>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListPage {...{ characters, setCharacters, originalData }} />
          }
        />
        <Route
          path="/bookmark"
          element={
            <FavoritePage {...{ characters, setCharacters, originalData }} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
