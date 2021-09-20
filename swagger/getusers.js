module.exports.getuser = function (app) {

    app.get('/user', {
        schema: {
            description: 'Get user ById /users List , UUID its an optional param if pass uuid get single user details else get all users details',
            tags: ['user'],
            summary: 'Get user ById /users List',
            headers: {
                type: 'object',
                properties:{
                    filetype:{ type: 'string', default: "csv" }
                }
            },
            querystring: {
                type: 'object',
                properties: {
                    uuid: { type: 'string', default: "2paj3pbna46e" }
                }
            },
            response: {
                200: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        name: { type: 'string'},
                        salary: { type: 'number' },
                        dob: { type: 'string'},
                        age: { type: 'number'}
                    }
                }
            },
            security: [
            ]
        },
        handler: async (req, res) => { }
    })
}