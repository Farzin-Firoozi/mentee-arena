import React from "react";
import BookMarkContext, {
  BookMarkContextProvider,
} from "./storage/bookMark-context";
import Characters from "./component/Characters";

function App() {
  return (
    <BookMarkContextProvider value={{markList: [1, 2]}}>
      <div className="App">
        <Characters />
      </div>
    </BookMarkContextProvider>
  );
}

export default App;
