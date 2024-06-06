import React from 'react';
import "../styles/card.scss";
import "../data/logements.json";

const Card = ({ cover, title }) => {
    return (
      <div className="card">
        <img src={cover} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    );
  };
  
  export default Card;