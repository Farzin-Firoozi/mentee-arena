import { useDispatch } from 'react-redux';
import { setStatus, setPageNumber } from '../features/rickAndMorty/rickAndMortySlice';

export default function FilterBTN({ input, index, name }) {

  const dispatch = useDispatch();

  function handleClick(input) {
    dispatch(setStatus(input));
    dispatch(setPageNumber(1))
  }

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input" type="radio"
          name={name} id={`${name}-${index}`}
        />
        <label 
          onClick={() => handleClick(input)}
          className="status-button"
          for={`${name}-${index}`} 
        > 
          {input}
        </label>
      </div>
    </div>
  )
}
