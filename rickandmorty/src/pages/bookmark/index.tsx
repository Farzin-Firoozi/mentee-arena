import React, { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  storeInLocalStorage,
} from "../../utils/functions";
import Characters from "../../components/Characters";
import { useLocation } from "react-router-dom";

import "./bookmark.style.css";

const Bookmark: React.FC = () => {
  const [bookmarks, setBoolmarks] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const items = getFromLocalStorage();
    setBoolmarks(items);
  }, []);

  const handleDelete = (id: string) => {
    const filteredItems = bookmarks.filter((f: any) => f.id !== id);
    localStorage.setItem("rickandmorty", JSON.stringify(filteredItems));
    setBoolmarks(filteredItems);
  };
  
  return (
    <div className="bookmarkContainer">
      {bookmarks && (
        <Characters
          items={bookmarks}
          showIcon={pathname === "/bookmark"}
          onRemove={handleDelete}
        />
      )}
      {(!bookmarks || bookmarks.length === 0) && <h4>There is no bookmark</h4>}
    </div>
  );
};

export default Bookmark;
