import React, { useState } from "react";
import { ICharacter } from "./types/characterlist.interface";
import { ShowBookmark, ShowfillBookmark } from "./icons/icons";

export default function Character({
  name,
  image,
  status,
  gender,
  species,
  created,
  bookmarked,
  onBookmarkChange,
}: ICharacter) {
  const [showBookmarks, setShowBookmarks] = useState(false);

  const toggleShowBookmarks = () => {
    setShowBookmarks(!showBookmarks);
  };

  const showBookMark = (
    <p onClick={onBookmarkChange}>
      {bookmarked ? "Remove Bookmark" : "Bookmark"}
    </p>
  );

  return (
    <div className=" max-h-full    shadow-xl p-4 border border-s-slate-300 rounded-md ">
      <img
        src={image}
        alt={name}
        className=" max-w-[290px] mx-auto h-[250px] flex items-center justify-center w-full  rounded-md"
      />

      <div className="space-y-1 py-4 px-6 text-base ">
        <div className="flex items-center justify-between w-full ">
          <h2 className="text-lg font-semibold">{name}</h2>
          <span className=" text-slate-600 ">{status}</span>
        </div>
        <div className="italic text-slate-700 space-y-2">
          <p>{gender}</p>
          <p>{species}</p>
          <p>{created}</p>
        </div>

        {showBookMark}
      </div>
    </div>
  );
}
