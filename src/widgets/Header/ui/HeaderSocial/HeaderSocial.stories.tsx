import {ComponentStory, ComponentMeta} from '@storybook/react';

import {HeaderSocial} from './HeaderSocial';

export default {
    title: 'shared/HeaderSocial',
    component: HeaderSocial,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof HeaderSocial>;

const Template: ComponentStory<typeof HeaderSocial> = (args) => <HeaderSocial {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
