import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Search from "./pages/search";
import Bookmark from "./pages/bookmark";
import Layout from "./components/Layout";
import Location from "./pages/location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/location" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
