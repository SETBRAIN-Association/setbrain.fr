import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '../components/Footer/Footer';

export default {
  title: 'Main/Footer',
  component: Footer,
  parameters: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer/>;

export const Default = Template.bind({});
