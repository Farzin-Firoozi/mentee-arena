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
});

const ContextProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState(null);
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
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;
