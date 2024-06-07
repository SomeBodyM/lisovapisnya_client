import {ComponentStory, ComponentMeta} from '@storybook/react';

import {HeaderNavItem} from './HeaderNavItem';

export default {
    title: 'shared/HeaderNavItem',
    component: HeaderNavItem,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof HeaderNavItem>;

const Template: ComponentStory<typeof HeaderNavItem> = (args) => <HeaderNavItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
