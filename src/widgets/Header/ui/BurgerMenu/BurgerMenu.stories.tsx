import {ComponentStory, ComponentMeta} from '@storybook/react';

import {BurgerMenu} from './BurgerMenu';

export default {
    title: 'shared/BurgerMenu',
    component: BurgerMenu,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof BurgerMenu>;

const Template: ComponentStory<typeof BurgerMenu> = (args) => <BurgerMenu {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
