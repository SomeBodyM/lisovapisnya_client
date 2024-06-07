import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PhotoBlockListEmpty} from './PhotoBlockListEmpty';

export default {
    title: 'shared/PhotoBlockListEmpty',
    component: PhotoBlockListEmpty,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PhotoBlockListEmpty>;

const Template: ComponentStory<typeof PhotoBlockListEmpty> = (args) => <PhotoBlockListEmpty {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
