import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ProfilePanel} from './ProfilePanel';

export default {
    title: 'shared/ProfilePanel',
    component: ProfilePanel,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ProfilePanel>;

const Template: ComponentStory<typeof ProfilePanel> = (args) => <ProfilePanel {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
