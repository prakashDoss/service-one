const axios = require('axios');

module.exports.newAxios = function (option) {
    const client = axios.create({
        headers: {
            'Content-Type': 'application/json'
        },
        json: true
    });
        
    return client(option).catch(function (error) {
        applog.log.info({REMOTE_SERVICE_ERROR:error});
        return Promise.reject(error);
    });
};
