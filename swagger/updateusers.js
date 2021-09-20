module.exports.updateuser = function (app) {

    app.put('/user', {
        schema: {
            description: 'update users',
            tags: ['user'],
            summary: 'update users',
            headers: {
                type: 'object',
                properties:{
                    filetype:{ type: 'string', default: "csv" }
                }
            },
            body: {
                type: 'object',
                properties: {
                    uuid: { type: 'string', default: "2paj3pbna46e" },
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