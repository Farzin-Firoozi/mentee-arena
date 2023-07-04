import React, {useState, useEffect} from "react";

const BookMarkContext = React.createContext({
  markList: [],
  addToBookMarkList: () => {},
  removeFromBookMarkList: () => {},
});

export const BookMarkContextProvider = (props) => {
  const [bookMarkList, setBookMarkList] = useState([]);

  // const bookMarkContext = {
  //     markList: [2, 3],
  //   };

  const addToBookMarkList = (item) => {
    setBookMarkList([...bookMarkList, item]);
  };
  const removeFromBookMarkList = (id) => {
    //  const bList = bookMarkList.filter((item) => item.id !== id);
    // console.log("bList", bList);
    setBookMarkList(bookMarkList.filter((item) => item.id !== id));
  };

  return (
    <BookMarkContext.Provider
      value={{
        markList: bookMarkList,
        addToBookMarkList,
        removeFromBookMarkList,
      }}
    >
      {props.children}
    </BookMarkContext.Provider>
  );
};

export default BookMarkContext;
