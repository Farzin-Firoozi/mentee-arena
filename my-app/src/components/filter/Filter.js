import { useDispatch } from 'react-redux';
import { setStatus, setGender, setSpecies, setPageNumber } from '../../features/rickAndMorty/rickAndMortySlice';
import Gender from "./categories/Gender";
import Species from "./categories/Species";
import Status from './categories/Status';

export default function Filter() {
  const dispatch = useDispatch();

  function clear() {
    dispatch(setStatus(""));
    dispatch(setGender(""));
    dispatch(setSpecies(""));
    dispatch(setPageNumber(1));
    window.location.reload();
  }

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div style={{ cursor: "pointer" }} onClick={clear} className="text-primary text-decoration-underline text-center mb-3"> 
        Clear Filters 
      </div>
      <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Gender />
      </div>
    </div>
  )
}
