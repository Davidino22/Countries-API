import React from 'react';
import './Header.css';

export default function Header(props) {
  const { input, handleChange, handleSelectChange } = props;
  return (
    <div className="header">
      <input
        type="text"
        onChange={handleChange}
        value={input}
        className="input"
      ></input>
      <select onChange={handleSelectChange} className="select">
        <option>Africa</option>
        <option>Americas</option>
        <option> Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
}
