import React, {useContext, useEffect, useState} from "react";
import classes from "./CharacterItem.module.css";
import Button from "./UI/Button";
import BookMarkContext from "../storage/bookMark-context";
import {RiBookmark3Fill} from "react-icons/ri";

const CharacterItem = ({item}) => {
  const [markState, setMarkState] = useState(false);

  const bookMarkCtx = useContext(BookMarkContext);
  console.log("bookMarkCtx.markList :", bookMarkCtx.markList);
  // console.log("markState", markState);
  //console.log(bookMarkCtx.markList.filter((e) => e.id === item.id).length > 0);

  // useEffect(() => {
  //   bookMarkCtx.addToBookMarkList(item);
  // }, [markState]);

  const addToBookMarkHandler = () => {
    bookMarkCtx.addToBookMarkList(item);
    setMarkState(true);
  };
  const removeFromBookMarkHandler = () => {
    console.log("remove");
    bookMarkCtx.removeFromBookMarkList(item.id);
    setMarkState(false);
  };

  return (
    <div className={classes.container}>
      <div>
        <img src={item.image} />
      </div>
      <RiBookmark3Fill
        style={{color: markState ? "yellow" : "white", fontSize: "50px"}}
        onClick={markState ? removeFromBookMarkHandler : addToBookMarkHandler}
      />

      <div>
        <h2>{item.name}</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>species</th>
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.species}</td>
              <td>{item.location.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CharacterItem;
