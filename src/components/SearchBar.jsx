import React, { useState } from "react";
import s from './styles/SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input className={s.input}
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={s.btn} type="submit" value="Add" />
    </form>
  );
}