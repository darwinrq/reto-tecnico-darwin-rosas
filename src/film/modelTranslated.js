const filmFieldsParse  = {
    "title" : "titulo",
    "episode_id" : "episodio_id",
    "opening_crawl" : "frases_apertura",
    "director" : "director",
    "producer" : "productor",
    "release_date" : "fecha_estreno",
    "species" : "especies",
    "starships" : "naves_espaciales",
    "vehicles" : "vehiculo",
    "characters" : "caracteres",
    "planets" : "planetas",
    "url" : "url",
    "created" : "creado",
    "edited" : "editado"
};


const filmParse = (film) => {
    
    return Object.keys(film).reduce((obj, field) => {
        const parse_field = filmFieldsParse[field];
        obj[parse_field] = film[field];
        return obj;
    }, {});
};

exports.filmParse = filmParse;
