import React, {useContext, useState} from "react";
import classes from "./Search.module.css";
import Input from "./UI/Input";
import axios from "axios";
import BookMarkContext from "../storage/bookMark-context";

const Search = (props) => {
  const [loading, setLoading] = useState(false);
  const bCtx = useContext(BookMarkContext);

  async function getCharacter(name) {
    console.log("ee");
    setLoading(true);
    const response = await axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=alive`
      )
      .then((res) => {
        console.log("o", res.data.results);
        props.searchResult(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error >>>>", err);
        setLoading(false);
      });
  }

  const onSearchSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    console.log("on change ", event.target.value);
    // if (event.target.value !== "") {
    //   setName(event.target.value);
    // }
    getCharacter(event.target.value);
  };

  const bList = JSON.parse(localStorage.getItem("bookM") || "[]");

  return (
    <div className={classes.container}>
      <form onSubmit={onSearchSubmitHandler}>
        <Input label="Search favorite character" onChange={onChangeHandler} />
      </form>
      {loading && <p> is Loading ...</p>}
      <p>from useContext : {bCtx.markList.length}</p>
      <p>from localStorage :{bList.length}</p>{" "}
    </div>
  );
};

export default Search;
