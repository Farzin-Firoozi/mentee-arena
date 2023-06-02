import { useContext, useEffect, useState } from "react";
import { ContextStore } from "../context";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../style/Search.style";
import { Box, ButtonBase } from "@mui/material";
import { getCharacterByName } from "../api";
import CharacterPagination from "../components/Pagination/CharacterPagination";

const SearchCharacters = () => {
  const { page, setNext, setPrev, pages, setPages, setLoaderStatus } =
    useContext(ContextStore);
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const getSearchedCharacter = async (data) => {
    setLoaderStatus(true);
    try {
      const res = await getCharacterByName(data);
      console.log(res);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setCharacters([]);
    getSearchedCharacter({
      address: `/character/?name=${name}&page=${page}`,
    });
  };

  useEffect(() => {
    if (name?.length) {
      setCharacters([]);
      getSearchedCharacter({
        address: `/character/?name=${name}&page=${page}`,
      });
    }
  }, [page]);

  return (
    <div>
      <Box>
        <form onSubmit={handleSubmit}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="ex: rick…"
              inputProps={{ "aria-label": "search" }}
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="off"
            />
          </Search>
          <ButtonBase type="submit">search</ButtonBase>
        </form>
      </Box>
      {characters?.length ? (
        <CharacterPagination
          characters={characters}
          count={count}
          pages={pages}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchCharacters;
