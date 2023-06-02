import React, { FormEvent, useState } from "react";
import "./search.styels.css";

interface ISearchCharacterProps {
  onSearch: (name: string) => void;
}

const SearchCharacter: React.FC<ISearchCharacterProps> = ({ onSearch }) => {
  const [characterName, setCharacterName] = useState<string>("");
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Enter character name"
        value={characterName}
        onChange={(e: FormEvent<HTMLInputElement>) => {
          setCharacterName(e.currentTarget.value);
        }}
      />
      <button onClick={() => onSearch(characterName)}>Search</button>
    </div>
  );
};

export default SearchCharacter;
