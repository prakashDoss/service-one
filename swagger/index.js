
module.exports = {
    routePrefix: '/api-docs',
    swagger: {
        info: {
            title: 'Benz User services',
            description: 'Testing the Benz User services API',
            version: '0.1.0'
        },
        host: 'localhost:2082/v1/',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            { name: 'user', description: 'User related end-points' }
        ],

        definitions: {
            User: {
                type: 'object',
                required: ['name', 'salary', 'dob', 'age'],
                properties: {
                    name: { type: 'string' },
                    salary: { type: 'number' },
                    dob: { type: 'string', format: 'date' },
                    age: { type: 'number' }
                }
            }
        }
    },
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    uiHooks: {
        onRequest: function (request, reply, next) { next() },
        preHandler: function (request, reply, next) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true
}
