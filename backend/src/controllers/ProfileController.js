const connection = require('../database/connection');


    module.exports = {
        async index(request, response){
            const ongs_id = request.headers.authorization;

            const incident = await connection('incident')
            .join('ongs', 'ongs.id', '=', 'incident.ongs_id')
            .where('ongs_id', ongs_id)
            .select('incident.*', 'ongs.name', 'ongs.email', 'ongs.celular');

            return response.json(incident);
        },
    }