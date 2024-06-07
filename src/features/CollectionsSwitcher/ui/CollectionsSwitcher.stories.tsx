import {ComponentStory, ComponentMeta} from '@storybook/react';

import {CollectionsSwitcher} from './CollectionsSwitcher';

export default {
    title: 'shared/CollectionsSwitcher',
    component: CollectionsSwitcher,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CollectionsSwitcher>;

const Template: ComponentStory<typeof CollectionsSwitcher> = (args) => <CollectionsSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
