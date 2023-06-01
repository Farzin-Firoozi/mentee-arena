import { useEffect, useState } from "react";
import Character from "./Character";
import classes from "./Characters.module.css";
import { clear, parsed, save } from "../functions/functions";

const Characters = (props) => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const fetchChracters = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();

      setCharacters(data.results);
    };

    fetchChracters();
  }, []);

  const addBookmarkHandler = (chData) => {
    const oldList = parsed("charactersList");

    if (chData.mode === "add") {
      if (
        !oldList.find((item) => {
          return item.id === chData.data.id;
        })
      ) {
        clear();
        oldList.push(chData.data);
        save("charactersList", oldList);
      }
    } else if (chData.mode === "delete") {
      const newArr = oldList.filter((item) => item.id !== chData.data.id);
      clear();
      save("charactersList", newArr);
    }
  };

  return (
    <div className={classes.characters}>
      {characters &&
        characters.map((character) => {
          return (
            <Character
              data={character}
              key={character.id}
              onAddBookmark={addBookmarkHandler}
              bookmarkmode={false}
              searchMode={false}
            />
          );
        })}
    </div>
  );
};

export default Characters;
