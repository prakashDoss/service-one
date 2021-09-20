
/**
 * @DESC : Request payload Validation
 * @param : string/int
 * @returns : array/object
 */
module.exports.verifyrequest = () => {

    //header validation
    const headersJsonSchema = {
        type: 'object',
        properties: {
            'filetype': { type: 'string' }
        },        
    }

    //body string validation
    const bodyJsonSchema = {
        required: ['name','dob','salary','age'],        
        properties: {           
            name: { type: 'string' },
            dob: { type: 'string' },
            salary: { type: 'integer' },
            age: { type: 'integer' }
        }

    }

    //schema - validation -decalarations
    const schema = {
        body: bodyJsonSchema,
        headers: headersJsonSchema
    }
    return schema;
};