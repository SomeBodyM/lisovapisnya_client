import {LoginSchema} from "features/AuthByUserName";
import {expect} from "@storybook/test";
import {loginActions, loginReducer} from "features/AuthByUserName/model/slice/loginSlice";

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {username: '123'};
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername( '123123123')
        )).toEqual({username: '123123123'})
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {password: '123'};
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword( '123123123'),
        )).toEqual({password: '123123123'})
    });
});


