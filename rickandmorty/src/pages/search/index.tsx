import React, { useState } from "react";
import SearchCharacter from "../../components/SearchCharacter";
import axiosHandler from "../../config/axios";
import { urls } from "../../constant/urls";
import Characters from "../../components/Characters";

import "./search.style.css";

const Search: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState([]);
  const [error, setError] = useState();
  const handleSearchCharacter = (name: string) => {
    setLoading(true);
    axiosHandler
      .get(urls.searchByName.replace("{searchParam}", name))
      .then((res) => {
        setResult(res.data.results);
      })
      .catch((err) => setError(err.error));
    setLoading(false);
  };

  return (
    <div>
      <SearchCharacter onSearch={handleSearchCharacter} />
      <div className="results">
        {loading ? <h4>Loading</h4> : <></>}
        {result ? <Characters items={result} /> : <></>}
        {!error && result.length === 0 && !loading && <h4>No search result</h4>}
        {error && <h4>{error}</h4>}
      </div>
    </div>
  );
};

export default Search;
