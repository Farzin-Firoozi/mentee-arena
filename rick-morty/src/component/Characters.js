import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterItem from "./CharacterItem";
import Search from "./Search";
import BookMarkList from "./BookMarkList";
import Button from "./UI/Button";

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);
  const [showBookMarksStatus, setShowBookMarksStatus] = useState(false);

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

  const showBookMarkHandler = () => {
    setShowBookMarksStatus(!showBookMarksStatus);
  };

  let content = (
    <div>
      <Search searchResult={searchResultsHandler} />
      {characterList.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </div>
  );
  if (showBookMarksStatus) {
    content = <BookMarkList />;
  }
  return (
    <div>
      <Button onClick={showBookMarkHandler}>
        Go to {showBookMarksStatus ? "Home Page" : "BookMark page"} !
      </Button>
      {content}
    </div>
  );
};

export default Characters;
