import {ComponentStory, ComponentMeta} from '@storybook/react';

import {CreateCategoryModal} from './CreateCategoryModal';

export default {
    title: 'shared/CreatePhotoModal',
    component: CreateCategoryModal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CreateCategoryModal>;

const Template: ComponentStory<typeof CreateCategoryModal> = (args) => <CreateCategoryModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
