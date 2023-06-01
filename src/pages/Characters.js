import { getPaginatCharacters } from "../api";
import { useContext, useEffect, useState } from "react";
import CharacterPagination from "../components/Pagination/CharacterPagination";
import { ContextStore } from "../context";

const Characters = () => {
  const { page, setPage, rowsPerPage, setNext, setPrev } =
    useContext(ContextStore);

  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  //is it needed ?
  const addChracters = (item) => {
    setCharacters((prv) => [...prv, item]);
    console.log("item in get", item);
  };
  const getCharacters = async (data) => {
    try {
      const res = await getPaginatCharacters(data);
      res?.data?.results.forEach((item) => {
        addChracters(item);
      });
      res?.data?.info &&
        setCount(res?.data?.info?.count) &&
        setNext(res?.data?.info?.next) &&
        setPrev(res?.data?.info?.prev);
      return true;
    } catch (rej) {
      alert(rej);
      return false;
    }
  };

  useEffect(() => {
    console.log("changes in page or rows", page, rowsPerPage);
    let data = { address: `/character/?page=${page}` };
    getCharacters(data);
  }, [page, rowsPerPage]);

  return (
    characters.length && (
      <CharacterPagination
        characters={characters}
        count={count}
      />
    )
  );
};

export default Characters;
