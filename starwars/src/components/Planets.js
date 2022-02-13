import React from 'react';
import { useQuery } from 'react-query';
import { Api } from '../api';
import Planet from './Planet';

const Planets = () => {
  const { data, status } = useQuery('planets', Api.fetchPlanets);
  console.log("data", data, "status", status)
  
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
          { data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
        </div>
      )}
    </div>
  );
};

export default Planets;