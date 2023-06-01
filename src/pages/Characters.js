import { getPaginatCharacters } from "../api";
import { useContext, useEffect, useState } from "react";
import CharacterPagination from "../components/Pagination/CharacterPagination";
import { ContextStore } from "../context";

const Characters = () => {
  const { page, setPage, rowsPerPage } = useContext(ContextStore);

  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);

  //is it needed ?
  const addChracters = (item) => {
    setCharacters((prv) => [...prv, item]);
  };
  const getCharacters = async (data) => {
    try {
      const res = await getPaginatCharacters(data);
      res?.data?.info &&
        setCount(res?.data?.info?.count) &&
        setPage(res?.data?.info?.prev ? res?.data?.info?.prev + 1 : 1);
      res?.data?.results.forEach((item) => {
        addChracters(item);
        console.log(item.name);
      });

      return true;
    } catch (rej) {
      alert(rej);
      return false;
    }
  };

  useEffect(() => {
    let data =
      page > 1
        ? { address: `/character/?page=${page}` }
        : { address: `/character/?page=null` };
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
