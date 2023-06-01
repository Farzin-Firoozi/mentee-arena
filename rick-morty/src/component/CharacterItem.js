import React, {useContext, useState} from "react";
import classes from "./CharacterItem.module.css";
import Button from "./UI/Button";

const CharacterItem = ({item}) => {
  // const bctx = useContext(BookMarkContext);
  const [blList, setBList] = useState([]);
  // console.log("local .....", localStorage.getItem("booked"));
  const addToBookMarkHandler = () => {
    setBList([...blList, item]);
    //localStorage.set("booked", JSON.stringify(item.name));
    //localStorage.setObj("booked", blList);
  };

  return (
    <div className={classes.container}>
      <div>
        <img src={item.image} />
      </div>
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
      {/* <Button onClick={addToBookMarkHandler} /> */}
    </div>
  );
};

export default CharacterItem;
