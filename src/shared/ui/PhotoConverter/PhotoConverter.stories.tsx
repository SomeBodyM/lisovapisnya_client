import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PhotoConverter} from './PhotoConverter';

export default {
    title: 'shared/PhotoConverter',
    component: PhotoConverter,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PhotoConverter>;

const Template: ComponentStory<typeof PhotoConverter> = (args) => <PhotoConverter {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
