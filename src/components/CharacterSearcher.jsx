// import { useRef } from 'react';

import { BiSearchAlt } from 'react-icons/bi';
const CharacterSearcher = ({ characters, setCharacters, originalData }) => {
  /* Handlers ___________________________________________ */
  const handleChange = (e) => {
    const searchName = e.target.value.toLowerCase().trim();

    if (searchName) {
      const searchResult = originalData.filter((character) => {
        const characterName = character.name.toLowerCase();
        return characterName.includes(searchName);
      });
      setCharacters(searchResult);
    } else {
      setCharacters(originalData);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="shadow-xl flex rounded-xl items-center justify-center hover:scale-x-105 duration-500">
        <BiSearchAlt className="m-2" />
        <label htmlFor=""> </label>
        <input
          className=" p-2 hover:bg-blue-50 rounded-r-xl"
          placeholder="Character Name"
          type="text"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CharacterSearcher;
