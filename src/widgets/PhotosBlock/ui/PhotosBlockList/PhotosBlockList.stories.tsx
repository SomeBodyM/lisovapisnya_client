import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PhotosBlockList} from './PhotosBlockList';

export default {
    title: 'shared/PhotosBlockList',
    component: PhotosBlockList,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PhotosBlockList>;

const Template: ComponentStory<typeof PhotosBlockList> = (args) => <PhotosBlockList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
