const { test, expect } = require('@jest/globals');
const translator = require('../src/people/modelTranslated.js');
const handler = require('../src/people/handler.js');
const {SWAPI_PEOPLES, SWAPI_PEOPLE} =  require('../src/config/api.js');


test('correct field parse',  () => {
    const people = {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.py4e.com/api/planets/1/",
        "films": [],
        "species": [],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.py4e.com/api/people/1/"
      }

    const parseFields =  Object.keys(translator.peopleParse(people))
    expect(parseFields).toContain("nombre");
    expect(parseFields).toContain("fecha_nacimiento");
    expect(parseFields).toContain("color_ojo");
    expect(parseFields).toContain("masa");
    expect(parseFields).toContain("genero");
    expect(parseFields).toContain("color_pelo");
    expect(parseFields).toContain("altura");
    expect(parseFields).toContain("color_piel");
    expect(parseFields).toContain("mundo_natal");
    expect(parseFields).toContain("peliculas");
    expect(parseFields).toContain("especies");
    expect(parseFields).toContain("naves_estelares");
    expect(parseFields).toContain("vehiculos");
    expect(parseFields).toContain("url");
    expect(parseFields).toContain("creado");
    expect(parseFields).toContain("editado");
});

test('when no pass queryparams get all people URL', () => {
    expect(handler.getUrl('')).toBe(SWAPI_PEOPLES);
});

test('when pass queryparams get people URL', () => {
    params = 13;

    expect(handler.getUrl(params)).toBe(SWAPI_PEOPLE(params));
});
