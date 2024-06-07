import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ProfileSkeleton} from './ProfileSkeleton';

export default {
    title: 'shared/ProfileSkeleton',
    component: ProfileSkeleton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ProfileSkeleton>;

const Template: ComponentStory<typeof ProfileSkeleton> = (args) => <ProfileSkeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
