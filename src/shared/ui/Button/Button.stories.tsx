import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        //@ts-ignore
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        //@ts-ignore
        primary: true,
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        //@ts-ignore
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        //@ts-ignore
        size: 'large',
        label: 'Button',
    },
};

export const Small: Story = {
    args: {
        //@ts-ignore
        size: 'small',
        label: 'Button',
    },
};
