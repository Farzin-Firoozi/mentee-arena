import React, { useState, useEffect } from "react";
import axios from "axios";

const Character = ({ character, bookmarked, onBookmarkChange }) => {
  const handleBookmarkChange = () => {
    onBookmarkChange(character.id);
  };

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <button onClick={handleBookmarkChange}>
        {bookmarked ? "Remove Bookmark" : "Bookmark"}
      </button>
    </div>
  );
};

const Bookmark = ({ character, onRemoveBookmark }) => {
  const handleRemoveBookmark = () => {
    onRemoveBookmark(character.id);
  };

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <button onClick={handleRemoveBookmark}>Remove Bookmark</button>
    </div>
  );
};

const BookMark = () => {
  const [characters, setCharacters] = useState([]);
  const [bookmarkedCharacters, setBookmarkedCharacters] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [hasLoded, setHasLoded] = useState(false);

  useEffect(() => {
    if (hasLoded) {
      localStorage.setItem(
        "bookmarkedCharacters",
        JSON.stringify(bookmarkedCharacters)
      );
    }
  }, [bookmarkedCharacters]);

  useEffect(() => {
    if (!hasLoded) {
      const storedBookmarks = localStorage.getItem("bookmarkedCharacters");
      if (storedBookmarks) {
        setBookmarkedCharacters(JSON.parse(storedBookmarks));
      }
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log("Error fetching characters:", error);
      });
  }, []);

  const handleBookmarkChange = (id: number) => {
    if (bookmarkedCharacters.includes(id)) {
      setBookmarkedCharacters(
        bookmarkedCharacters.filter((bookmark) => bookmark !== id)
      );
    } else {
      setBookmarkedCharacters([...bookmarkedCharacters, id]);
    }
  };

  const handleRemoveBookmark = (id) => {
    setBookmarkedCharacters(
      bookmarkedCharacters.filter((bookmark) => bookmark !== id)
    );
  };

  const toggleShowBookmarks = () => {
    setShowBookmarks(!showBookmarks);
  };

  return (
    <div>
      <h1>Characters</h1>
      <button onClick={toggleShowBookmarks} className="font-medium">
        {showBookmarks ? "Show All Characters" : "Show Bookmarked Characters"}
      </button>
      {showBookmarks
        ? bookmarkedCharacters.map((id) => {
            const character = characters.find((c) => c.id === id);
            return (
              <Bookmark
                key={id}
                character={character}
                onRemoveBookmark={handleRemoveBookmark}
              />
            );
          })
        : characters.map((character) => (
            <Character
              key={character.id}
              character={character}
              bookmarked={bookmarkedCharacters.includes(character.id)}
              onBookmarkChange={handleBookmarkChange}
            />
          ))}
    </div>
  );
};

export default BookMark;
