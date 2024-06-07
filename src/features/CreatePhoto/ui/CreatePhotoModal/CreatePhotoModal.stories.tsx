import {ComponentStory, ComponentMeta} from '@storybook/react';

import {CreatePhotoModal} from './CreatePhotoModal';

export default {
    title: 'shared/CreatePhotoModal',
    component: CreatePhotoModal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CreatePhotoModal>;

const Template: ComponentStory<typeof CreatePhotoModal> = (args) => <CreatePhotoModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
