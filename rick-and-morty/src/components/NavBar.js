import { useState } from "react";
import classes from "./NavBar.module.css";
import { parsed } from "../functions/functions";
import Character from "./Character";

const NavBar = (props) => {
  const [showBook, setShowBook] = useState({ mode: false });

  const showBookMarkHandler = () => {
    // const listOfCharacters = parsed("charactersList");
    const res = { mode: true };
    setShowBook(res);
    props.onShowMode(res);
  };

  const showAllCharactersHandler = () => {
    setShowBook({ mode: false });
    props.onShowMode({ mode: false });
  };

  return (
    <div className={classes.navbar}>
      {!showBook.mode && (
        <button onClick={showBookMarkHandler}>
          show just bookmarked characters
        </button>
      )}

      {showBook.mode && (
        <button onClick={showAllCharactersHandler}>show all characters</button>
      )}
    </div>
  );
};

export default NavBar;
