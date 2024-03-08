import { screen } from '@testing-library/react'
import {componentRender} from "shared/lib/test/componentRender/componentRender";
import {Counter} from "./Counter";
import {userEvent} from "@storybook/test";

describe('Counter', () => {
    test('width only first param', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('decrement', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
});
