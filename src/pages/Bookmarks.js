import { useContext, useEffect, useState } from "react";
import CharacterPagination from "../components/Pagination/CharacterPagination";
import { ContextStore } from "../context";

const Bookmarks = () => {
  const [bookmark, setBookmark] = useState([]);
  const { setPages, setPage, reloadBookmark } = useContext(ContextStore);
  useEffect(() => {
    setPages(1);
    setPage(0);
    const localBookmark = localStorage?.getItem("bookmarks");
    if (localBookmark) {
      setBookmark(JSON.parse(localBookmark));
    }
  }, [reloadBookmark]);
  
  return  bookmark.length ? (
    <CharacterPagination
      characters={bookmark}
      count={bookmark.length - 1}
    />
  ) : (
    <></>
  );
};

export default Bookmarks;
