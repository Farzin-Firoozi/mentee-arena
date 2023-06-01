import classes from "./Character.module.css";

const Character = (props) => {
  const bookmarkHandler = () => {
    props.onAddBookmark({ mode: "add", data: props.data });
  };

  const deleteBookMarkHandler = () => {
    props.onAddBookmark({ mode: "delete", data: props.data });
  };

  return (
    <div className={classes.main}>
      {/* detail section */}
      <div className={classes.details}>
        <div>name: {props.data.name}</div>
        <div>status: {props.data.status}</div>
        <div>species: {props.data.species}</div>
        <div>gender: {props.data.gender}</div>
        <div>origin: {props.data.origin.name}</div>
        <div>location: {props.data.location.name}</div>
      </div>

      {/* image section */}
      <img className={classes.image} src={props.data.image} />

      {/* bookmark button */}
      <div className={classes.bookmark}>
        {!props.showBookmarkMode && (
          <button onClick={bookmarkHandler}>add to bookmark</button>
        )}

        {<button onClick={deleteBookMarkHandler}>delete bookmark</button>}
      </div>
    </div>
  );
};

export default Character;
