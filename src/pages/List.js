import { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import CardDigimon from '../components/CardDigimon';

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadDigimon();
  }, []);

  const handleAll = () => {
    loadDigimon();
  };

  async function loadDigimon() {
    try {
      const response = await axios.get('https://digimon-api.vercel.app/api/digimon');
      setList(response.data);
    } catch (error) {
      throw error;
    }
  }

  async function loadDigimonLevel(level) {
    try {
      const response = await axios.get(`https://digimon-api.vercel.app/api/digimon/level/${level}`);
      setList(response.data);
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className='container'>

      <div className='containerButton'>
        <button className='buttonheader' onClick={handleAll}> Todos </button>
        <button className='buttonheader' onClick={() => loadDigimonLevel('Fresh')}> Fresh </button>
        <button className='buttonheader' onClick={() => loadDigimonLevel('in Training')}> Em Treinamento </button>
        <button className='buttonheader' onClick={() => loadDigimonLevel('Rookie')}> Rookie </button>
        <button className='buttonheader' onClick={() => loadDigimonLevel('Champion')}> Champion </button>
        <button className='buttonheader' onClick={() => loadDigimonLevel('Ultimate')}> Ultimate </button>
        <button className='buttonheader' onClick={() => loadDigimonLevel('Mega')}> Mega </button>
        <button className='buttonheader' onClick={() => loadDigimonLevel('Armor')}> Armor </button>
      </div>

      <div className='containerMain'>
        {list &&
          list.slice(0, 100).map((item, index) => (
            <CardDigimon key={index} item={item} />
          ))
        }
      </div>

    </div>
  );
};

export default List;