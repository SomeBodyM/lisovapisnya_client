import {ComponentStory, ComponentMeta} from '@storybook/react';

import CreatePhotoForm from './CreatePhotoForm';

export default {
    title: 'shared/CreatePhotoForm',
    component: CreatePhotoForm,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CreatePhotoForm>;

const Template: ComponentStory<typeof CreatePhotoForm> = (args) => <CreatePhotoForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
