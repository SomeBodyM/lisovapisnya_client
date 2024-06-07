import {ComponentStory, ComponentMeta} from '@storybook/react';

import PhotoPage from './PhotoPage';

export default {
    title: 'shared/PhotoPage',
    component: PhotoPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PhotoPage>;

const Template: ComponentStory<typeof PhotoPage> = () => <PhotoPage  />;

export const Normal = Template.bind({});
Normal.args = {};
