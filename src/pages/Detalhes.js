import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Detalhes.css'

const Detalhes = () => {

    const {name} = useParams()
    const Navigate = useNavigate()
    const [digimon, setDigimon] = useState([]);

    useEffect(() => {
        async function loadDigimon() {
            try {
                const response = await axios.get(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
                console.log(response)
                setDigimon(response.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        loadDigimon()
    }, [])

    const handleVoltar = () => {
        Navigate('/')
    }

    return (
        <div className='containerDetalhes'>
            <button className='buttonStyle' onClick={handleVoltar}>Voltar</button>
            {
                digimon.length > 0 &&
                <div className='containertwoMain'>
                    <div className='card-poke'>
                        <h1 className='color-style'>{digimon[0].name}</h1>
                        <img className='color-style' height={250} width={250} src={digimon[0].img}></img>
                        <p className='color-style'>{digimon[0].level}</p>
                    </div>
                </div>
            }   
        </div>
    );
}

export default Detalhes;