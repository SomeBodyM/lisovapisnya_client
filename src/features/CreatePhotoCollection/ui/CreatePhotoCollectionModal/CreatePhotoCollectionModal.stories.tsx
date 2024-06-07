import {ComponentStory, ComponentMeta} from '@storybook/react';

import {CreatePhotoCollectionModal} from './CreatePhotoCollectionModal';

export default {
    title: 'shared/CreatePhotoCollectionModal',
    component: CreatePhotoCollectionModal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CreatePhotoCollectionModal>;

const Template: ComponentStory<typeof CreatePhotoCollectionModal> = (args) => <CreatePhotoCollectionModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
