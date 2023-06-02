import { useState, useEffect } from 'react';
import { BsBookmarkCheckFill, BsBookmark } from 'react-icons/bs';
import { keyValues } from '../utils/constants';

function Table({ characters, setCharacters }) {
  /* State ______________________________________________ */
  // get the data out of localStorage
  const [bookmark, setBookmark] = useState(
    characters.map((char) => {
      const isBookmarked = localStorage.getItem(char.id) === 'true';
      return { ...char, bookmarked: isBookmarked };
    })
  );
  // update bookmark
  const updateBookmark = () => {
    const newBookmark = bookmark.filter((char) => char.bookmarked);
    setBookmark(newBookmark);
  };

  useEffect(() => {
    updateBookmark();
  }, []);

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

  /* Headers ___________________________________________ */
  const renderedHeader = keyValues.map((keyVal, index) => (
    <th
      className="p-4 bg-slate-200"
      key={index}
    >
      {keyVal}
    </th>
  ));

  /* Data _______________________________________________ */
  const renderedRows = bookmark.map((character) => {
    const isBookmarked = bookmark.find(
      (char) => char.id === character.id
    ).bookmarked;

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
    <div className="m-10 flex justify-center">
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
