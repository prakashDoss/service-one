module.exports.createuser = function (app) {

    app.post('/user', {
        schema: {
            description: 'create users',
            tags: ['user'],
            summary: 'create users',
            headers: {
                type: 'object',
                properties:{
                    filetype:{ type: 'string', default: "csv" }
                }
            },
            body: {
                type: 'object',
                properties: {
                    name: { type: 'string', default: "Prakash Doss K" },
                    salary: { type: 'number', default: "8500" },
                    dob: { type: 'string', default: "20-06-1995" },
                    age: { type: 'number', default: "23" }
                }
            },
            response: {
                200: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        uuid: { type: 'string' }
                    }
                }
            },
            security: [
            ]
        },
        handler: async (req, res) => { }
    })
}