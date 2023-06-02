import React, { useEffect, useState } from "react";
import Characters from "../../components/Characters";
import { getCharacters } from "../../services/rickAndMorty";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./main.style.css";
const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState<number>(1);

  const fetchCharacters = () => {
    setLoading(true);
    getCharacters(page).then((res) => {
      setCharacters(res.results);
    });
    setLoading(false);
  };

  useEffect(() => {
  
    fetchCharacters();
  }, [page]);
  
  return (
    <div>
      <div className="header">
        <h2>RickAndMorty - Exploring The MultiVerse with React</h2>
        <div className="buttonContainer">
          <button
            disabled={page === 1}
            onClick={() => setPage((prevPage) => prevPage - 1)}
          >
            <FaArrowLeft />
            prev
          </button>
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>
            next
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="content">
        {loading ? <h1>Loading ...</h1> : <Characters items={characters} />}
      </div>
    </div>
  );
};

export default Home;
