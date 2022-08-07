import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../components/Header/Header';

export default {
  title: 'Main/Header',
  component: Header,
  parameters: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header/>;

export const Default = Template.bind({});
