// src/components/Button.stories.js
import React from 'react';

import Button from './Button';

export default {
  title: 'UI/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  typeClass: 'default',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Button Link',
  typeClass: 'link',
};