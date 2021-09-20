const { chai, globalConstants } = require('./index');

describe('BENZ-PRIMARY USER SERVICE API TEST', () => {

    it('should provide uuid for newly created users in CSV File with HTTP 200', async () => {
        const response = await chai
            .request(globalConstants.BASEURL)
            .post('v1/user')
            .send(globalConstants.CREATE_USER_PAYLOADS)
            .set(globalConstants.CREATE_OR_UPDATE_USER_IN_CSV_FILE_HEADERS);
        chai.expect(response.status).to.eql(globalConstants.HTTP_STATUS_CODE.HTTP_OK);
    });

    it('should provide uuid for newly created users in XML File with HTTP 200', async () => {
        const response = await chai
            .request(globalConstants.BASEURL)
            .post('v1/user')
            .send(globalConstants.CREATE_USER_PAYLOADS)
            .set(globalConstants.CREATE_OR_UPDATE_IN_XML_FILE_HEADERS)
        chai.expect(response.status).to.eql(globalConstants.HTTP_STATUS_CODE.HTTP_OK);
    });

    it('should provide user details wich file type is CSV with HTTP 200', async () => {
        const response = await chai
            .request(globalConstants.BASEURL)
            .get('v1/user')
            .query(globalConstants.GET_CSV_FILE_USER_PAYLOADS.uuid)
            .set(globalConstants.CREATE_OR_UPDATE_USER_IN_CSV_FILE_HEADERS)
        chai.expect(response.status).to.eql(globalConstants.HTTP_STATUS_CODE.HTTP_OK);
    });

    it('should provide user details wich file type is XML with HTTP 200', async () => {
        const response = await chai
            .request(globalConstants.BASEURL)
            .get('v1/user')
            .query(globalConstants.GET_XML_FILE_USER_PAYLOADS.uuid)
            .set(globalConstants.CREATE_OR_UPDATE_IN_XML_FILE_HEADERS)
        chai.expect(response.status).to.eql(globalConstants.HTTP_STATUS_CODE.HTTP_OK);
    });

    it('should provide all the user details with HTTP 200', async () => {
        const response = await chai
            .request(globalConstants.BASEURL)
            .get('v1/user')
            .query(globalConstants.GET_ALL_USERS.uuid)
            .set(globalConstants.GENERAL_HEADERS)
        chai.expect(response.status).to.eql(globalConstants.HTTP_STATUS_CODE.HTTP_OK);
    });

    it('should provide updated user deatils in CSV File with HTTP 200', async () => {
        const response = await chai
            .request(globalConstants.BASEURL)
            .put('v1/user')
            .send(globalConstants.UPDATE_CSV_USER_PAYLOADS)
            .set(globalConstants.CREATE_OR_UPDATE_USER_IN_CSV_FILE_HEADERS)
        chai.expect(response.status).to.eql(globalConstants.HTTP_STATUS_CODE.HTTP_OK);
    });

    it('should provide updated user deatils in XML File with HTTP 200', async () => {
        const response = await chai
            .request(globalConstants.BASEURL)
            .put('v1/user')
            .send(globalConstants.UPDATE_XML_USER_PAYLOADS)
            .set(globalConstants.CREATE_OR_UPDATE_USER_IN_CSV_FILE_HEADERS)
        chai.expect(response.status).to.eql(globalConstants.HTTP_STATUS_CODE.HTTP_OK);
    });

});