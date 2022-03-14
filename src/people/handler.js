'use strict';

const axios = require('axios');
const {SWAPI_PEOPLES, SWAPI_PEOPLE} =  require('../config/api.js');
const {peopleParse} = require('./modelTranslated.js');


const getUrl = (idPeople) => {
    return  idPeople? SWAPI_PEOPLE(idPeople) : SWAPI_PEOPLES;
}
module.exports.peopleList =  async (event) => {
    const {peopleId} = event.pathParameters ? event.pathParameters: {peopleId:''};
    const peopleAPIUrl = getUrl(peopleId);
    const params = {
        "params": {"format": "json", ...event.queryStringParameters  }
    }

    try{
        let data;
        const response = await axios.get(peopleAPIUrl, params);
        if (peopleId){
            data  = peopleParse(response.data);
        } else {
            response.data.results = response.data.results.map(people => (peopleParse(people)));
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