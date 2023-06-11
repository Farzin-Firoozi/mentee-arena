import './style.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFetchedData, setLoading } from './features/rickAndMorty/rickAndMortySlice';
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import Card from './components/Card';
import Search from './components/Search';
import Pagination from './components/Pagination';
import Filter from './filter/Filter';
import Episodes from './pages/Episodes';
import Location from './pages/Location';

function Home() {
  const dispatch = useDispatch();

  const fetchedData = useSelector(state => state.rickAndMorty.rickAndMorty.fetchedData);
  const loading = useSelector(state => state.rickAndMorty.rickAndMorty.loading);
  const pageNumber = useSelector(state => state.rickAndMorty.rickAndMorty.pageNumber);
  const search = useSelector(state => state.rickAndMorty.rickAndMorty.search);
  const status = useSelector(state => state.rickAndMorty.rickAndMorty.status);
  const gender = useSelector(state => state.rickAndMorty.rickAndMorty.gender);
  const species = useSelector(state => state.rickAndMorty.rickAndMorty.species);


  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;



  useEffect(() => {
    dispatch(
      setLoading(true)
    );
    fetch(api)
      .then((res) => res.json())
      .then((response) => {
        dispatch(
          setFetchedData(response)
        );
        dispatch(
          setLoading(false)
        );
      });
  }, [api]);


  return (
    <div className="App">
      <h1 className="text-center mb-3 mt-2">Characters</h1>
      <Search />
      <nav className="navbar navbar-expand-lg navbar-light mb-4">
        <div className="container">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-bars open text-dark"></span>
            <span class="fas fa-times close text-dark"></span>
          </button>
          <div className="navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav fs-5">
              <NavLink to="/" className="nav-link">
                Characters
              </NavLink>
              <NavLink to="/episodes" className="nav-link">
                Episode
              </NavLink>
              <NavLink activeClassName="active" className="nav-link" to="/location">
                Location
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center">
          <Filter />
          <div className="col-lg-8 col-12">
            <div className="row">
              {loading && <div className="spin-loader mx-auto"></div>}
              {!loading && <Card results={results} />}
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          results={results}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  )
}

export default App;
