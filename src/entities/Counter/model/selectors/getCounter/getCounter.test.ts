import {expect} from "@storybook/test";
import {getCounter} from "./getCounter";
import {StateSchema} from "app/providers/StoreProvider";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
describe('getCounter', () => {
    test('return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {value: 10}
        };
        expect(getCounter(state as StateSchema)).toEqual({value: 10})
    })
})