import React from "react";
import BookMarkContext from "./storage/bookMark-context";
import Characters from "./component/Characters";

function App() {
  return (
    <BookMarkContext.Provider value={{markList: [1, 2]}}>
      <div className="App">
        <Characters />
      </div>
    </BookMarkContext.Provider>
  );
}

export default App;
