import React from 'react';
import Card from './Card.jsx';
import s from "./styles/Cards.module.css";

export default function Cards({cities, onClose}) {
  return (
    <div className={s.cards}>
      {cities? cities.map(c => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> ) : 
        <div>
          YOU HAVENT ADDED CITIES
        </div>}
    </div>
  );
}