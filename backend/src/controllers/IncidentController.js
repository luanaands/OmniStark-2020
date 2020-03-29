const connection = require('../database/connection');


    module.exports = {
        async index(request, response){
            const {page = 1} = request.query;

            const [count] = await connection('incident').count();

            const incident = await connection('incident')
            .limit(5)
            .offset((page-1)*5)
            .select('*');

            response.header('X-Total-Count', count['count(*)']);

            return response.json(incident);
        },

        async create(request, response){
            const { title, description , value } = request.body;
            const ongs_id = request.headers.authorization;

            const [id] = await connection('incident').insert({
                title,
                description, 
                value,
                ongs_id,
            })

            return response.json({id});
        },
        async delete(request, response){
            const { id } = request.params;
            const ongs_id = request.headers.authorization;

            const incident = await connection('incident')
            .where('id',id)
            .select('ongs_id')
            .first();

            if(incident.ongs_id != ongs_id){
                return response.status(401).json({error:  "Operation not permitted"});
            }

            await connection('incident').where('id',id).delete();
            return response.status(204).send()
        }


    };