import {getCounterValue} from "./getCounterValue";
import {StateSchema} from "app/providers/StoreProvider";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
describe('getCounterValue.test', () => {
    test('get value', () => {
        const state : DeepPartial<StateSchema> = {
            counter: {value: 10}
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});