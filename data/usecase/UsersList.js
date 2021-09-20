const getuserslist = require('../../infrastructure/RemoteServices/secondaryuserservice');
const encryptanddecrypt = require('../datasecurity/EncryptAndDecrypt');

class UsersList {
    constructor() {
    }

    async getUsersList(uuid)
    {                
        const userList = await getuserslist.getuserList(uuid ||'');
        return ( userList.data.data && Object.keys(userList.data.data).length) ? await encryptanddecrypt.decryption(userList.data.data):[];
                                              
    }
}

const usersList = new UsersList();
module.exports = usersList;