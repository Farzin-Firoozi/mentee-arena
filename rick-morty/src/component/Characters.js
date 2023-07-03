import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterItem from "./CharacterItem";
import Search from "./Search";

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    async function getAllCharacters() {
      const response = await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => {
          setCharacterList(res.data.results);
        })
        .catch((err) => {
          console.log("error", err.message);
        });
    }
    getAllCharacters();
  }, []);

  const searchResultsHandler = (result) => {
    setCharacterList(result);
  };
  return (
    <div>
      <Search searchResult={searchResultsHandler} />
      {characterList.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Characters;
