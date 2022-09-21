import React from 'react';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CreatureService from '../service/creatureService';
import CreatureList from './CreatureList';



const creatureService = new CreatureService();

const Creatures = () => {
    const [data, setData] = useState([]);
    
    const getCreatures = async () => {
       const data = await creatureService.getCreatures();

       console.log(data);

       setData(data);
    }

    useEffect(()=>{
        getCreatures();
    }, []);
  
    return (
    <Container>
        <CreatureList creatures={data}/>
    </Container>
   
  );
};

export default Creatures
