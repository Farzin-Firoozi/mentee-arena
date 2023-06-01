import Characters from "../pages/Characters";
import Layout from "../layout";
import { Route, Routes } from "react-router-dom";
import SearchCharacters from "../pages/SearchCharacters";
import Bookmarks from "../pages/Bookmarks";

function App() {
  return (
    <main>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Characters />}
          />
          <Route
            path="/search-character"
            element={<SearchCharacters />}
          />
          <Route
            path="/bookmark"
            element={<Bookmarks />}
          />
          <Route
            path="/*"
            element={<p>page not found</p>}
          />
        </Routes>
      </Layout>
    </main>
  );
}

export default App;
