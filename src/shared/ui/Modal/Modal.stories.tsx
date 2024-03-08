import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Modal} from "./Modal";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {SecondaryDark} from "shared/ui/AppLink/AppLink.stories";

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad doloremque facere fuga fugiat impedit minima nobis numquam quaerat veritatis.'
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad doloremque facere fuga fugiat impedit minima nobis numquam quaerat veritatis.'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]