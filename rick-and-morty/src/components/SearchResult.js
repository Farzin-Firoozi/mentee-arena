import { useEffect, useState } from "react";
import classes from "./SearchResult.module.css";
import Character from "./Character";
import { clear, parsed, save } from "../functions/functions";

const SearchResult = (props) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    const fetchSearchedItem = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${props.name}`
      );
      const data = await response.json();
      if (data.error) {
        props.error();
        return;
      }

      setCharacter(data.results);
    };

    fetchSearchedItem();
  }, [props.name]);

  const addBookmarkHandler = (obj) => {
    const oldList = parsed("charactersList");

    if (obj.mode === "add") {
      if (
        !oldList.find((item) => {
          return item.id === obj.data.id;
        })
      ) {
        clear();
        oldList.push(obj.data);
        save("charactersList", oldList);
      }
    } else if (obj.mode === "delete") {
      const newArr = oldList.filter((item) => item.id !== obj.data.id);
      clear();
      save("charactersList", newArr);
    }
  };

  return (
    <div className={classes.characters}>
      {character &&
        character.map((item) => {
          return (
            <Character
              data={item}
              key={item.id}
              searchMode={true}
              bookmarkmode={false}
              onAddBookmark={addBookmarkHandler}
            />
          );
        })}
    </div>
  );
};

export default SearchResult;
