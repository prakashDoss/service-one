const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const globalConstants = {
    BASEURL: 'http://localhost:2082/',
    GENERAL_HEADERS:{
        "Content-Type": "application/json"
    },
    CREATE_OR_UPDATE_USER_IN_CSV_FILE_HEADERS: {
        "fileType": "csv",
        "Content-Type": "application/json"
    },
    CREATE_OR_UPDATE_IN_XML_FILE_HEADERS: {
        "fileType": "xml",
        "Content-Type": "application/json"
    },
    CREATE_USER_PAYLOADS: {
        "name": "Doss",
        "salary": "30001",
        "dob": "19-04-1996",
        "age": 20
    },

    UPDATE_CSV_USER_PAYLOADS: {
        "uuid": "2paj3pbna46e",
        "name": "Prakash Doss",
        "salary": "30001",
        "dob": "19-04-1996",
        "age": 20
    },
    
    UPDATE_XML_USER_PAYLOADS: {
        "uuid": "fke7oam19p6",
        "name": "Prakashk",
        "salary": "60001",
        "dob": "19-04-1995",
        "age": 23
    },

    GET_CSV_FILE_USER_PAYLOADS: {
        "uuid": "2paj3pbna46e"
    },

    GET_XML_FILE_USER_PAYLOADS: {
        "uuid": "fke7oam19p6"
    },

    GET_ALL_USERS: {
        "uuid": ""
    },

    HTTP_STATUS_CODE: {
        ERR_CONNECTION_RESET: 101,
        HTTP_OK: 200,
        HTTP_CREATED: 201,
        HTTP_ACCEPTED: 202,
        HTTP_NO_CONTENT: 204,
        HTTP_MULTIPLE_CHOICES: 300,
        HTTP_MOVED_PERMANENTLY: 301,
        HTTP_FOUND: 302,
        HTTP_NOT_MODIFIED: 304,
        HTTP_PERMANENTLY_REDIRECT: 308,
        HTTP_BAD_REQUEST: 400,
        HTTP_UNAUTHORIZED: 401,
        HTTP_FORBIDDEN: 403,
        HTTP_NOT_FOUND: 404,
        HTTP_METHOD_NOT_ALLOWED: 405,
        HTTP_UNPROCESSABLE_ENTITY: 422,
        HTTP_INTERNAL_SERVER_ERROR: 500,
        HTTP_BAD_GATEWAY: 502
    }
}

module.exports = {
    chai, globalConstants
}