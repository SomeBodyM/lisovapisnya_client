import {ComponentStory, ComponentMeta} from '@storybook/react';

import {DeleteModal} from './DeleteModal';

export default {
    title: 'shared/FavoriteManageModal',
    component: DeleteModal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof DeleteModal>;

const Template: ComponentStory<typeof DeleteModal> = (args) => <DeleteModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
