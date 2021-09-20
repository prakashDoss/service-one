const { newAxios } = require('../index');

const USER_SERVICE_TWO_BASE_URL = process.env.USER_SERVICE_TWO_BASE_URL;

class SecondaryUserServices {

    getuserList = async (uuid) => {
        const result = await newAxios({
            baseURL: USER_SERVICE_TWO_BASE_URL,
            url: `/users-list?uuid=${uuid}`,
            method: "GET"
        });
        return result;
    }
}

const secondaryUserServices = new SecondaryUserServices();
module.exports = secondaryUserServices;
