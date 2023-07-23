import React, { useEffect, useState } from "react";

import { Virtuoso } from "react-virtuoso";
import { getAllLocations } from "../../services/rickAndMorty";

import { ILocation } from "../../types/api/location";
import LocationCard from "../../components/LocationCard";

import styles from "./location.module.css";

const Location: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any[]>();

  const getLocations = () => {
    setIsLoading(true);
    getAllLocations()
      .then((res) => setResult(res.results))
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  useEffect(() => {
    getLocations();
  }, []);  

  if (isLoading) return <h5>Loading...</h5>;

  return (
    <div>
      <Virtuoso
        data={result}
        id="scroll"
        className={styles.virtuoso}
        totalCount={result && result.length}
        itemContent={(index, location: ILocation) => {
          return (
            <div className={styles.container}>
              <LocationCard loc={location} />
            </div>
          );
        }}
      />
    </div>
  );
};

export default Location;
