import React from 'react';
import { useQuery } from 'react-query';
import { Api } from '../api';
import Person from './Person';


const People = () => {
  const { data, status } = useQuery('people', Api.fetchPeople);
  console.log("data", data, "status", status)
  
  return (
    <div>
      <h2>People</h2>

      {status === 'loading' && (
        <div>Loading data...</div>
      )}
      {status === 'error' && (
        <div>Error Fetching data</div>
      )}
      {status === 'success' && (
        <div>
          { data.results.map(person => <Person key={person.name} person={person} />)}
        </div>
      )}
    </div>
  );
};

export default People;