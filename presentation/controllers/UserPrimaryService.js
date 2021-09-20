const response = require('../helpers/Responsehelper');
const responseCode = require('../helpers/Responsecode');
const responseMessages = require('../helpers/ResponseMessage');
const protobuffer = require('../../application/repositories/protoBuffer');
const rabbitMq = require('../../infrastructure/rabbitmq/RabbitMq');
const userList = require('../../data/usecase/UsersList');


class UserPrimaryService {

    constructor() { }

    /**
     * @DESC : Strore the user details
     * @param : string/Int in JSON object
     * @returns : array/object
     */

    createUserDetails = async (req, res) => {
        try {

            const uuid = Math.random().toString(26).slice(2);
            const options = { headers: req.headers, correlationId: uuid };

            await rabbitMq.publish(await protobuffer.encode(req.body), options);

            const resultData = {
                message: responseMessages.USERCREATED,
                data: { uuid: uuid }
            }

            return response.out(req, res, responseCode.HTTP_OK, resultData);

        } catch (err) {
            return response.out(req, res, responseCode.ERR_CONNECTION_RESET, err);
        }
    }

    /**
     * @DESC : update the user details
     * @param : string/Int in JSON object
     * @returns : array/object
     */

    updateUserDetails = async (req, res) => {
        try {

            const options = { headers: req.headers, correlationId: req.body.uuid };

            await rabbitMq.publish(await protobuffer.encode(req.body), options);

            const resultData = {
                message: responseMessages.USERUPDATED,
                data: req.body
            }

            return response.out(req, res, responseCode.HTTP_OK, resultData);

        } catch (err) {
            return response.out(req, res, responseCode.ERR_CONNECTION_RESET, err);
        }
    }

    /**
     * @DESC : Strore the user details
     * @param : string/Int in JSON object
     * @returns : array/object
     */

    UserDetailsList = async (req, res) => {
        try {

            const resultData = await userList.getUsersList(req.query.uuid);
            return response.out(req, res, resultData.length ? responseCode.HTTP_OK : responseCode.HTTP_NOT_FOUND, { message: responseMessages.USERLIST, data: resultData.length ? JSON.parse(resultData) : [] });

        } catch (err) {            
            return response.out(req, res, responseCode.ERR_CONNECTION_RESET, err);
        }
    }

}

const userprimaryservice = new UserPrimaryService();
module.exports = userprimaryservice;