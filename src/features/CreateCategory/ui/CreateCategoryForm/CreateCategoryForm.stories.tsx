import {ComponentStory, ComponentMeta} from '@storybook/react';

import CreateCategoryForm from './CreateCategoryForm';

export default {
    title: 'shared/CreatePhotoForm',
    component: CreateCategoryForm,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CreateCategoryForm>;

const Template: ComponentStory<typeof CreateCategoryForm> = (args) => <CreateCategoryForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
