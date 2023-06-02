import { getPaginatCharacters } from "../api";
import { useContext, useEffect, useState } from "react";
import CharacterPagination from "../components/Pagination/CharacterPagination";
import { ContextStore } from "../context";

const Characters = () => {
  const { page, setNext, setPrev, loaderStatus, setLoaderStatus } =
    useContext(ContextStore);

  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState(0);

  const getCharacters = async (data) => {
    setLoaderStatus(true);
    try {
      const res = await getPaginatCharacters(data);
      setCharacters(res?.data?.results);
      res?.data?.info &&
        setCount(res?.data?.info?.count) &&
        setPages(res?.data?.info?.pages) &&
        setNext(res?.data?.info?.next) &&
        setPrev(res?.data?.info?.prev);
      return true;
    } catch (rej) {
      alert(rej);

      return false;
    } finally {
      setLoaderStatus(false);
    }
  };

  useEffect(() => {
    setCharacters([]);
    console.log("changes in page or rows", page);
    let data = { address: `/character/?page=${page}` };
    getCharacters(data);
  }, [page]);

  return characters.length ? (
    <CharacterPagination
      characters={characters}
      count={count}
    />
  ) : (
    <></>
  );
};

export default Characters;
