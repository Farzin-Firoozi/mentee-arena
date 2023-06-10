import './style.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFetchedData, setLoading } from './features/rickAndMorty/rickAndMortySlice';
import Card from './components/Card';
import Search from './components/Search';
import Pagination from './components/Pagination';
import Filter from './filter/Filter';

function App() {
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

export default App;
