import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PhotoBlockListError} from './PhotoBlockListError';

export default {
    title: 'shared/PhotoBlockListError',
    component: PhotoBlockListError,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PhotoBlockListError>;

const Template: ComponentStory<typeof PhotoBlockListError> = (args) => <PhotoBlockListError {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
