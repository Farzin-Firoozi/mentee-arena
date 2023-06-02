import { useState, useEffect } from 'react';
import { BsBookmarkCheckFill, BsBookmark } from 'react-icons/bs';
import { keyValues } from '../utils/constants';

function Table({ characters, setCharacters }) {
  /* State ______________________________________________ */
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    const updatedBookmark = characters.map((char) => {
      const isBookmarked = localStorage.getItem(char.id.toString()) === 'true';
      return { id: char.id, bookmarked: isBookmarked };
    });
    setBookmark(updatedBookmark);
  }, [characters]);

  /* Toggle Bookmark _____________________________________ */
  const toggleBookmark = (id) => {
    setBookmark((prevState) =>
      prevState.map((char) =>
        char.id === id ? { ...char, bookmarked: !char.bookmarked } : char
      )
    );
  };

  /* Update localStorage _____________________________________ */
  const updateLocalStorage = () => {
    bookmark.forEach((char) => {
      localStorage.setItem(char.id, char.bookmarked);
    });
  };

  /* Call updateLocalStorage whenever bookmark changes */
  useEffect(() => {
    updateLocalStorage();
  }, [bookmark]);

  /* RenderedHeader _____________________________________ */

  /* ■■■■■■■■■■■■■■■■■■■■■■■ Headers ■■■■■■■■■■■■■■■■■■■■■■ */
  const renderedHeader = keyValues.map((keyVal, index) => (
    <th
      className="p-4 bg-slate-200"
      key={index}
    >
      {keyVal}
    </th>
  ));

  /* ■■■■■■■■■■■■■■■■■■■■■■■■ Rows ■■■■■■■■■■■■■■■■■■■■■■■■ */
  const renderedRows = characters.map((character) => {
    const bookmarkedCharacter = bookmark.find(
      (char) => char.id === character.id
    );
    const isBookmarked = bookmarkedCharacter
      ? bookmarkedCharacter.bookmarked
      : false;

    /* ■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■ */
    return (
      <tr
        className="border-b text-center"
        key={character.id}
      >
        <td className="bg-gray-500 text-white">{character.id}</td>
        <td>{character.name}</td>
        <td className="flex items-center justify-center">
          <img
            className="w-40 rounded"
            src={character.image}
            alt=""
          />
        </td>
        <td>{character.status}</td>
        <td>{character.species}</td>
        <td>{character.type}</td>
        <td>{character.gender}</td>
        <td>{character.created}</td>
        <td>
          <div
            onClick={() => toggleBookmark(character.id)}
            className="flex justify-center text-4xl hover:scale-110 hover:rotate-12 duration-500"
          >
            {isBookmarked ? <BsBookmarkCheckFill /> : <BsBookmark />}
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="p-10 flex justify-center">
      <table className="shadow-2xl">
        <thead>
          <tr className="border-b border-black p-2">{renderedHeader}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
