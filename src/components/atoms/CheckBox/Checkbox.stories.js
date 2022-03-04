import { Form, Formik } from 'formik';
import React from 'react';
import CheckBox from './Checkbox';

export default {
  title: 'UI/Atoms/CheckBox',
  component: CheckBox,
};

const Template = (args) => (
  <Formik
    initialValues={{
      check: false,
    }}
  >
    <Form>
      <CheckBox name='check' {...args} />
    </Form>
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
};
