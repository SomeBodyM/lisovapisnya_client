import {ComponentStory, ComponentMeta} from '@storybook/react';

import {HeaderNav} from './HeaderNav';

export default {
    title: 'shared/HeaderNav',
    component: HeaderNav,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof HeaderNav>;

const Template: ComponentStory<typeof HeaderNav> = (args) => <HeaderNav {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
