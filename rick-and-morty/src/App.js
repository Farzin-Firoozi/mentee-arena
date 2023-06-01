import { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import Characters from "./components/Characters";
import NavBar from "./components/NavBar";
import ShowBookMark from "./components/ShowBookMark";

function App() {
  const [isSearched, setIsSearched] = useState(false);
  const [searchedCharacter, setSearchedCharacter] = useState();
  const [showBook, setShowBook] = useState({ mode: false });

  const searchedHandler = (characterName) => {
    if (characterName) {
      setSearchedCharacter(characterName);
      setIsSearched(true);
    }
  };

  const onErrorHandler = () => {
    setIsSearched(false);
  };

  const showModeHandler = (obj) => {
    if (obj.mode == true) {
      setShowBook(obj);
    } else {
      setShowBook({ mode: false });
      setIsSearched(false);
    }
  };

  return (
    <div className="App">
      <NavBar onShowMode={showModeHandler} />

      {!showBook.mode && <Search onSubmit={searchedHandler} />}
      {showBook.mode && <ShowBookMark />}
      {!isSearched && !showBook.mode && <Characters />}
      {isSearched && !showBook.mode && (
        <SearchResult name={searchedCharacter} error={onErrorHandler} />
      )}
    </div>
  );
}

export default App;
