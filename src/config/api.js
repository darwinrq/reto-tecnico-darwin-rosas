const SWAPI_BASE = "https://swapi.py4e.com/api/";

const SWAPI_PEOPLES = `${SWAPI_BASE}people/?format=json`;
const SWAPI_PEOPLE = (idPeople) => `${SWAPI_BASE}people/${idPeople}/?format=json`;

const SWAPI_FILMS = `${SWAPI_BASE}films/?format=json`;
const SWAPI_FILM = (idFilm) => `${SWAPI_BASE}films/${idFilm}/?format=json`;

exports.SWAPI_PEOPLES = SWAPI_PEOPLES;
exports.SWAPI_PEOPLE = SWAPI_PEOPLE;
exports.SWAPI_FILMS = SWAPI_FILMS;
exports.SWAPI_FILM = SWAPI_FILM;
