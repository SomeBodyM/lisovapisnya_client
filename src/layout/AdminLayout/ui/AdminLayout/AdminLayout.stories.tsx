import {ComponentStory, ComponentMeta} from '@storybook/react';

import {AdminLayout} from './AdminLayout';

export default {
    title: 'shared/AdminLayout',
    component: AdminLayout,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof AdminLayout>;

const Template: ComponentStory<typeof AdminLayout> = (args) => <AdminLayout {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
