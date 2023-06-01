import React, {useState, useEffect} from "react";

const BookMarkContext = React.createContext({
  markList: [],
});

export default BookMarkContext;

export const BookMarkContextProvider = (props) => {
  return (
    <BookMarkContext.Provider
      value={{
        markList: [2, 3],
      }}
    >
      {props.children}
    </BookMarkContext.Provider>
  );
};
