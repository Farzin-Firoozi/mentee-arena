import React from "react";
import { ICharacter } from "../../types/api/character";
import CharacterCard from "../CharacterCard";
import "./characters.styles.css";

interface ICharactersProps {
  items?: ICharacter[];
  showIcon?: boolean;
  onRemove?: (id: string) => void;
}

const Characters: React.FC<ICharactersProps> = ({
  items,
  showIcon,
  onRemove,
}) => {
  return (
    <div className="charactersContainer">
      {items &&
        items.length > 0 &&
        items?.map((item) => (
          <CharacterCard
            key={item.id}
            character={item}
            showDeletIcon={showIcon}
            onRemove={onRemove}
          />
        ))}
    </div>
  );
};

export default Characters;
