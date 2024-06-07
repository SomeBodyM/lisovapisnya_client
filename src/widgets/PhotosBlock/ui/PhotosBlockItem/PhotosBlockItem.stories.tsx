import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PhotosBlockItem} from './PhotosBlockItem';

export default {
    title: 'shared/PhotosBlockItem',
    component: PhotosBlockItem,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PhotosBlockItem>;

const Template: ComponentStory<typeof PhotosBlockItem> = (args) => <PhotosBlockItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
