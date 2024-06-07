import {ComponentStory, ComponentMeta} from '@storybook/react';

import {CreateForm} from './CreateForm';

export default {
    title: 'shared/CreateForm',
    component: CreateForm,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CreateForm>;

const Template: ComponentStory<typeof CreateForm> = (args) => <CreateForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
