import {ComponentStory, ComponentMeta} from '@storybook/react';

import {CreatePhotoCollectionForm} from './CreatePhotoCollectionForm';

export default {
    title: 'shared/CreatePhotoCollectionForm',
    component: CreatePhotoCollectionForm,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CreatePhotoCollectionForm>;

const Template: ComponentStory<typeof CreatePhotoCollectionForm> = (args) => <CreatePhotoCollectionForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
