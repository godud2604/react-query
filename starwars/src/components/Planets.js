import React from 'react';
import { useQuery } from 'react-query';
import { Api } from '../api';
import Planet from './Planet';

const Planets = () => {
  // const { data, status } = useQuery('planets', Api.fetchPlanets);

  // data : 이름 custom 가능
  const { data:planets, status } = useQuery('planets', Api.fetchPlanets);
  console.log("data", planets, "status", status)
  
  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && (
        <div>Loading data...</div>
      )}
      {status === 'error' && (
        <div>Error Fetching data</div>
      )}
      {status === 'success' && (
        <div>
          { planets.results.map(planet => <Planet key={planet.name} planet={planet} />)}
        </div>
      )}
    </div>
  );
};

export default Planets;