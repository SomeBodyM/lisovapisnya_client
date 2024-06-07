import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PhotoBlockListSkeleton} from './PhotoBlockListSkeleton';

export default {
    title: 'shared/PhotoBlockListSkeleton',
    component: PhotoBlockListSkeleton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PhotoBlockListSkeleton>;

const Template: ComponentStory<typeof PhotoBlockListSkeleton> = (args) => <PhotoBlockListSkeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
