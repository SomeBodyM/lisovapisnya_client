import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PriceCard} from './PriceCard';

export default {
    title: 'shared/PriceCard',
    component: PriceCard,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PriceCard>;

const Template: ComponentStory<typeof PriceCard> = (args) => <PriceCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
