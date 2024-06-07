import {ComponentStory, ComponentMeta} from '@storybook/react';

import CategoryDetailsPage from './CategoryDetailsPage';

export default {
    title: 'shared/CategoryDetailsPage',
    component: CategoryDetailsPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CategoryDetailsPage>;

const Template: ComponentStory<typeof CategoryDetailsPage> = () => <CategoryDetailsPage />;

export const Normal = Template.bind({});
Normal.args = {};
