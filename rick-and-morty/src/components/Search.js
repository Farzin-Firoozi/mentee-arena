import { useRef } from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const inputName = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(inputName.current.value);
    // should manipulate input  like this but i think it is ok for here
    inputName.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        className={classes.input}
        name="characterName"
        placeholder="type the name of character you want to find"
        ref={inputName}
      />
    </form>
  );
};

export default Search;
