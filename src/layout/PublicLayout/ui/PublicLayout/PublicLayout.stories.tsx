import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PublicLayout} from './PublicLayout';

export default {
    title: 'shared/PublicLayout',
    component: PublicLayout,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PublicLayout>;

const Template: ComponentStory<typeof PublicLayout> = (args) => <PublicLayout {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
