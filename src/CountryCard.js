import React from 'react';
import './CountryCard.css';
import { Link } from 'react-router-dom';

export default function CountryCard(props) {
  const { name, flag, population, region, capital, alpha } = props;
  return (
    <div className="card">
      <div className="flag">
        <Link to={`/${alpha}`}>
          {' '}
          <img src={flag} alt="flag"></img>{' '}
        </Link>
      </div>
      <div className="cardText">
        <p className="name">{name}</p>
        <p> population:{population}</p>
        <p> region:{region}</p>
        <p> capital: {capital}</p>
      </div>
    </div>
  );
}
