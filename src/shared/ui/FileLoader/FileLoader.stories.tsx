import {ComponentStory, ComponentMeta} from '@storybook/react';

import {FileLoader} from './FileLoader';

export default {
    title: 'shared/FileLoader',
    component: FileLoader,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof FileLoader>;

const Template: ComponentStory<typeof FileLoader> = (args) => <FileLoader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
