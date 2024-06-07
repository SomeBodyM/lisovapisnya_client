import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Photo} from './Photo';

export default {
    title: 'shared/Photo',
    component: Photo,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Photo>;

const Template: ComponentStory<typeof Photo> = (args) => <Photo {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
