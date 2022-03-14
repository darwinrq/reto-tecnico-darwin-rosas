const {v4} = require('uuid'); 
const AWS = require('aws-sdk');
const axios = require('axios');
const {SWAPI_PEOPLE} =  require('../config/api.js');
const {peopleParse} = require('../people/modelTranslated.js');

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.addPeople = async(event) => {

    const {peopleId} = event.pathParameters ? event.pathParameters: {peopleId:1};
    const params = {
        "params": {"format": "json", ...event.queryStringParameters  }
    }
    const people = await axios.get(SWAPI_PEOPLE(peopleId), params);
    let data = peopleParse(people.data);
    const id = v4();
    data.id = id;
    await dynamodb.put({
        TableName: 'peoples',
        Item: data
    }).promise();

    return {
        statusCode: 201,
        body: JSON.string(data)
    };
}

module.exports.listPeople = async(event) => {

    const result = await dynamodb.scan({
        TableName: 'peoples'
    }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(result.Items)
    };
}