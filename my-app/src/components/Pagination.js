import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setPageNumber } from '../features/rickAndMorty/rickAndMortySlice';
import ReactPaginate from "react-paginate";

export default function Pagination({ info, results }) {
  const dispatch = useDispatch();

  const pageNumber = useSelector(state => state.rickAndMorty.rickAndMorty.pageNumber);

  let pageChange = (data) => {
    dispatch(setPageNumber(data.selected + 1));
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    results && <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="button fs-5 prev"
      nextClassName="button fs-5 next"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      pageCount={info?.pages}
      onPageChange={pageChange}
    />
  )
}
