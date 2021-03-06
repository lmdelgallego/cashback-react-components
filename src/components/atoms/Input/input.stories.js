import { Form, Formik } from 'formik';
import React from 'react';

import TextInput, { Input as InputComp } from './input';

export default {
  title: 'UI/Atoms/Input',
  component: TextInput,
  parameters: {
    props: {
      propTables: [InputComp],
    },
  },
};

export const Default = (args) => {
  return (
    <Formik
      initialValues={{
        input: '',
      }}
      onSubmit={() => {}}
    >
      <Form>
        <TextInput name='input' {...args} />
      </Form>
    </Formik>
  );
};
Default.args = {
  label: 'Input Label',
  type: 'text',
  clearButton: true,
  placeholder: 'Placeholder',
};
