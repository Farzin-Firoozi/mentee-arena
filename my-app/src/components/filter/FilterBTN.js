import { useDispatch } from 'react-redux';
import { setPageNumber } from '../../features/rickAndMorty/rickAndMortySlice';

export default function FilterBTN({ task, input, index, name }) {

  const dispatch = useDispatch();

  function handleClick(input) {
    task(input);
    dispatch(setPageNumber(1))
  }

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input" type="radio"
          name={name} id={`${name}-${index}`}
        />
        <label onClick={() => handleClick(input)} className="filter-button" htmlFor={`${name}-${index}`}> 
          {input}
        </label>
      </div>
    </div>
  )
}
