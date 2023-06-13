import { useDispatch } from 'react-redux'
import { setPageNumber, setSearch } from '../features/rickAndMorty/rickAndMortySlice'


export default function Search() {
  const dispatch = useDispatch();


  return (
    <form className="search d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-4">
      <input
        onChange={(e) => {
          dispatch(setPageNumber(1));
          dispatch(setSearch(e.target.value));
        }}
        placeholder="Search for characters"
        className="input"
        type="text"
      />
    </form>
  )
}
