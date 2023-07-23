import React, { useEffect, useState } from "react";
import { ICharacter } from "../../types/api/character";
import { FaBookmark } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";

import {
  isItemInLocalStorage,
  storeInLocalStorage,
} from "../../utils/functions";

import "./characterCard.styles.css";
interface ICharacterCardProps {
  character?: ICharacter;
  showDeletIcon?: boolean;
  onRemove?: (id: string) => void;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({
  character,
  showDeletIcon,
  onRemove,
}) => {
  const [isBookmarked, setIsbookmarked] = useState<boolean>(false);

  // add each character to bookmark and local storage, if it exist it will be removed from bookmarks list
  const handleBookmark = () => {
    if (character) {
      storeInLocalStorage(character);

      const isExisted = isItemInLocalStorage(character);

      if (isExisted !== -1) {
        setIsbookmarked(true);
      } else {
        setIsbookmarked(false);
      }
    }
  };

  // remove character from local storage
  const handleRemove = () => {
    if (character && onRemove) {
      onRemove(character.id);
    }
  };

  useEffect(() => {
    // check whether character is  bookmarked (if the character is in localstorage it means it is bookmarked)    
    if (character) {
      const isExisted = isItemInLocalStorage(character);
      if (isExisted !== -1) {
        setIsbookmarked(true);
      }
    }
  }, [character, character?.id]);
  return (
    <div className="card">
      <img src={character?.image} alt={character?.name} />
      <div className="cardBody">
        <div className="title">
          <h4>{character?.name}</h4>
          {!showDeletIcon && (
            <button onClick={handleBookmark}>
              {isBookmarked ? <FaBookmark /> : <FiBookmark />}
            </button>
          )}
          {showDeletIcon && onRemove && (
            <button onClick={handleRemove}>
              <AiFillDelete />
            </button>
          )}
        </div>
        <div className="status">
          <span>
            {character?.status} - {character?.species}
          </span>
        </div>
        <div className="location">
          <span>location:</span>
          <span>{character?.location?.name}</span>
        </div>
        <div className="gender">
          <span>gender:</span>
          <span>{character?.gender}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
