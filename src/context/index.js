import { createContext, useState } from "react";

//sotre
export const ContextStore = createContext({
  page: null,
  setPage: () => {},
  rowsPerPage: 0,
  setRowsPerPage: () => {},
});

const ContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return (
    <ContextStore.Provider
      value={{
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;
