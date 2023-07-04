import React, {useContext, useState} from "react";
import {CiBookmarkRemove} from "react-icons/ci";
import classes from "./BookMarkList.module.css";
import BookMarkContext from "../storage/bookMark-context";
import Button from "./UI/Button";

const BookMarkList = () => {
  const [removeBMStatus, setRemoveBMStatus] = useState(false);
  const bookMarkCtx = useContext(BookMarkContext);
  console.log(bookMarkCtx.markList);
  const removeHandler = (bm) => {
    console.log("bm>", bm);
    bookMarkCtx.removeFromBookMarkList(bm.id);
    setRemoveBMStatus(true);
  };
  return (
    <div className={classes.container}>
      <h2>BookMark List</h2>
      <div>
        {bookMarkCtx.markList.map((bm) => (
          <div className={classes.itemContainer}>
            <div>
              <CiBookmarkRemove
                onClick={() => removeHandler(bm)}
                className={classes.icon}
              />
              <li>{bm.name}</li>
            </div>
            <img src={bm.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BookMarkList;
