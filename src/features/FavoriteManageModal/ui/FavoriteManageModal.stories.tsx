import {ComponentStory, ComponentMeta} from '@storybook/react';

import {FavoriteManageModal} from './FavoriteManageModal';

export default {
    title: 'shared/FavoriteManageModal',
    component: FavoriteManageModal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof FavoriteManageModal>;

const Template: ComponentStory<typeof FavoriteManageModal> = (args) => <FavoriteManageModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
