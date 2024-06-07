import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Profile} from './Profile';

export default {
    title: 'shared/Profile',
    component: Profile,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
