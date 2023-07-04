import React, {useState, useEffect} from "react";

const BookMarkContext = React.createContext({
  markList: [],
  addToBookMarkList: () => {},
  removeFromBookMarkList: () => {},
});

const initialBookMarkList = JSON.parse(localStorage.getItem("bookM") || "[]");
export const BookMarkContextProvider = (props) => {
  const [bookMarkList, setBookMarkList] = useState(initialBookMarkList);

  const markList = JSON.parse(localStorage.getItem("bookM") || "[]");
  const addToBookMarkList = (item) => {
    const updateList = [...bookMarkList, item];
    setBookMarkList(updateList);
    localStorage.setItem("bookM", JSON.stringify(updateList));
  };
  const removeFromBookMarkList = (id) => {
    console.log("id", id);
    const updateList = markList.filter((item) => item.id !== id);
    setBookMarkList(updateList);
    localStorage.setItem("bookM", JSON.stringify(updateList));
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
