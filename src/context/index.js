import { createContext, useState } from "react";

//sotre
export const ContextStore = createContext({
  page: 0,
  setPage: () => {},
  rowsPerPage: 0,
  setRowsPerPage: () => {},
  next: "" || null,
  setNext: () => {},
  prev: "" || null,
  setPrev: () => {},
  pages: 0,
  setPages: () => {},
});

const ContextProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState(null);
  const [pages, setPages] = useState(0);

  return (
    <ContextStore.Provider
      value={{
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        next,
        setNext,
        prev,
        setPrev,
        pages,
        setPages,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;
