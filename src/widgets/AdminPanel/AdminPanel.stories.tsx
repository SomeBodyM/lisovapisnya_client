import {ComponentStory, ComponentMeta} from '@storybook/react';

import {AdminPanel} from './AdminPanel';

export default {
    title: 'shared/AdminPanel',
    component: AdminPanel,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof AdminPanel>;

const Template: ComponentStory<typeof AdminPanel> = (args) => <AdminPanel {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
