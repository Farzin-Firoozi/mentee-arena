import { useEffect, useState } from "react";
import CharacterPagination from "../components/Pagination/CharacterPagination";

const Bookmarks = () => {
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    const localBookmark = localStorage?.getItem("bookmarks");
    if (localBookmark) {
      setBookmark(JSON.parse(localBookmark));
    }
  }, []);
  return (
    <CharacterPagination
      characters={bookmark}
      count={bookmark.length - 1}
    />
  );
};

export default Bookmarks;
