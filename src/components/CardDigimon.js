import React from 'react';
import './CardDigimon.css';
import { Link } from 'react-router-dom';

const CardDigimon = ({ item, index }) => {
  return (
    <div className='card-poke' key={index}>
      <img src={item.img} alt='Minha Figura' />
      <h1>{item.name}</h1>
      <Link className='link-name' to={`/detalhes/${item.name}`}>
        detalhes
      </Link>
    </div>
  );
};

export default CardDigimon;