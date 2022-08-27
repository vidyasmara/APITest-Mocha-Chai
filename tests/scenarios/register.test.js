import { assert } from 'chai';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';

describe('As a guest, I want to register', () => {

    it('Should successfully register using valid account', async () => {
        const response = await ReqresAPI.register(data.VALID_REGISTER);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
    });
});

describe('As a guest, I can not register without password', () => {

    it('Guest can not register without password', async () => {
        const response = await ReqresAPI.register(data.INVALID_REGISTER);

        assert.equal(response.status, 400);
        assert.containsAllKeys(response.data, ["error"]);
        assert.isString(response.data.error);
    });
});