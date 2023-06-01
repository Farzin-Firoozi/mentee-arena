import { useEffect, useState } from "react";
import Character from "./Character";
import classes from "./ShowBookMark.module.css";
import { clear, parsed, save } from "../functions/functions";

const ShowBookMark = (props) => {
  const [chLists, setChLists] = useState();

  useEffect(() => {
    const oldList = parsed("charactersList");
    setChLists(oldList);
  }, []);

  const BookmarkHandler = (chData) => {
    const oldList = chLists;

    if (chData.mode === "add") {
      if (
        !oldList.find((item) => {
          return item.id === chData.data.id;
        })
      ) {
        clear();
        oldList.push(chData.data);
        save("charactersList", oldList);
        setChLists(oldList);
      }
    } else if (chData.mode === "delete") {
      const newArr = oldList.filter((item) => item.id !== chData.data.id);
      clear();
      save("charactersList", newArr);
      setChLists(newArr);
    }
  };

  return (
    <div className={classes.characters}>
      {chLists &&
        chLists.map((item) => {
          return (
            <Character
              data={item}
              key={item.id}
              onAddBookmark={BookmarkHandler}
              showBookmarkMode={true}
              searchMode={false}
            />
          );
        })}
    </div>
  );
};

export default ShowBookMark;
