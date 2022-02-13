const fetchPlanets = () =>
  fetch(
    'http://swapi.dev/api/planets/'
  ).then((res) => res.json());

const fetchPeople = () => 
  fetch(
    'http://swapi.dev/api/people/'
  ).then((res) => res.json());

export const Api = { fetchPlanets, fetchPeople };