import './style.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFetchedData } from './features/rickAndMorty/rickAndMortySlice';
import Card from './components/Card';
import Search from './components/Search';
import Pagination from './components/Pagination';

function App() {
  const dispatch = useDispatch();

  const fetchedData = useSelector(state => state.rickAndMorty.rickAndMorty.fetchedData);
  const pageNumber = useSelector(state => state.rickAndMorty.rickAndMorty.pageNumber);
  const search = useSelector(state => state.rickAndMorty.rickAndMorty.search);

  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    fetch(api)
    .then((res) => res.json())
    .then((response) => {
      dispatch(
        setFetchedData(response)
      )
    });
  }, [api]);


  return (
    <div className="App">
      <h1 className="text-center mb-3 mt-2">Characters</h1>
      <Search />
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card results={results} />
          </div>
        </div>
      </div>
      <Pagination
        info={info}
      />
      </div>
    </div>
  );
}

export default App;
