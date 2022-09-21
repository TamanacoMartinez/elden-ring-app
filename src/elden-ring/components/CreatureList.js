import React from 'react';
import { Row } from 'react-bootstrap';
import CreatureCard from './CreatureCard';

const CreatureList = ({creatures}) => {
  return (
   <Row>
     {creatures.map((creature => 
     <CreatureCard creature={creature}/>
     ))}
   </Row> 
  );
};

export default CreatureList
