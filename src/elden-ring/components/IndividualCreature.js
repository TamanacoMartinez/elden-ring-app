import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreatureService from '../service/creatureService';
import ProfileHeader from '../../components/ProfileHeader';
import { capitalize } from '../../utils/capitalize';


const creatureService = new CreatureService()

const IndividualCreature = () => {
    const [creature, setCreature] = useState(null);
    const params = useParams();

    const getCreatureById= async () => {
        if (params.id) {
        setCreature(await creatureService.getCreatureById(params.id));
        }
        };

        useEffect(() => {
            getCreatureById();
            }, [params]);

  return (
    creature && (
        <>
          <ProfileHeader
            profileImage={creature.image}
            alt={capitalize(creature.name)}
            backToName="Home"
            name={capitalize(creature.name)}
          />
        </>
      )
  )
}

export default IndividualCreature;
