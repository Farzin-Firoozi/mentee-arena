import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICharacterInfo } from "./types/characterlist.interface";
import Character from "./Character";
import LayoutCharacter from "./LayoutCharacter";

export default function CharacterList() {
  const [characterInfo, setCharacterInfo] = useState<ICharacterInfo[]>([]);
  const [bookmarkedCharacters, setBookmarkedCharacters] = useState([]);
  const [hasLoded, setHasLoded] = useState(false);

  console.log("book", bookmarkedCharacters);

  useEffect(() => {
    if (hasLoded) {
      localStorage.setItem(
        "bookmarkedCharacters",
        JSON.stringify(bookmarkedCharacters)
      );
    }
  }, [bookmarkedCharacters, hasLoded]);

  useEffect(() => {
    if (!hasLoded) {
      const storedBookmarks = localStorage.getItem("bookmarkedCharacters");
      if (storedBookmarks) {
        setBookmarkedCharacters(JSON.parse(storedBookmarks));
      }
      setHasLoded(true);
    }
  }, [hasLoded]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        console.log(response);
        console.log("result:", response.data.results);
        setCharacterInfo(response.data.results);
      })
      .catch((error) => console.log(error));
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

  const handleRemoveBookmark = (id: number) => {
    setBookmarkedCharacters(
      bookmarkedCharacters.filter((bookmark) => bookmark !== id)
    );
  };

  return (
    <LayoutCharacter>
      {characterInfo &&
        characterInfo?.map((character: ICharacterInfo) => (
          <Character
            name={character?.name}
            image={character?.image}
            status={character?.status}
            gender={character?.gender}
            species={character?.species}
            created={`${character?.created}`.slice(0, 10).replace(/-/g, "/")}
            id={character?.id}
            bookmarked={bookmarkedCharacters.includes(character.id)}
            onBookmarkChange={() => handleBookmarkChange(character?.id)}
          />
        ))}
    </LayoutCharacter>
  );
}
