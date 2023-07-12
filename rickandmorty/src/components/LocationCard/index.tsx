import React from "react";
import {FaGlobe} from 'react-icons/fa';
import {FaTypo3} from 'react-icons/fa';
import {FaDatabase} from 'react-icons/fa';
import styles from "./locationCard.module.css";
import { ILocation } from "../../types/api/location";

interface ILoationCardProps {
  loc: ILocation;
}

const LocationCard: React.FC<ILoationCardProps> = ({ loc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <span>Name:</span>
        <h5>{loc.name} <FaGlobe/></h5>
        
      </div>
      <div className={styles.row}>
        <span>Type:</span>
        <h5>{loc.type} <FaTypo3/></h5>
      </div>
      <div className={styles.row}>
        <span>Dimention:</span>
        <h5>{loc.dimension} <FaDatabase/></h5>
      </div>
    </div>
  );
};

export default LocationCard;
