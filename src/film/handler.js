'use strict';

const axios = require('axios');
const {SWAPI_FILMS, SWAPI_FILM} =  require('../config/api.js');
const {filmParse} = require('./modelTranslated.js');


const getUrl = (idFilm) => {
    return  idFilm? SWAPI_FILM(idFilm) : SWAPI_FILMS;
}
module.exports.filmList =  async (event) => {
    const {filmId} = event.pathParameters ? event.pathParameters: {filmId:''};
    const filmAPIUrl = getUrl(filmId);
    const params = {
        "params": {"format": "json", ...event.queryStringParameters  }
    }

    try{
        let data;
        const response = await axios.get(filmAPIUrl, params);
        if (filmId){
            data  = filmParse(response.data);
        } else {
            response.data.results = response.data.results.map(film => (filmParse(film)));
            data  = response.data;
        }
        
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error){
        console.log(error.status);
    }
};

module.exports.getUrl = getUrl;