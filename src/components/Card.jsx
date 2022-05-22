import React from 'react';
import s from './styles/Card.module.css';
import {Link} from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={s.card}>
        <div className={s.row}>
            <button onClick={onClose} className={s.btn}>X</button>
        </div>
        <div className={s.cardBody}>
        <Link to={`/city/${id}`} className={s.cardTitle}>
          <h5>{name}</h5>
        </Link>
            <div>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="110" height="110" alt="" />
            </div>
            <div className={s.info}>
              <p>Min: {min/10}°  <br/> Max: {max/10}°</p>
            </div>
        </div>
      </div>
    );
};