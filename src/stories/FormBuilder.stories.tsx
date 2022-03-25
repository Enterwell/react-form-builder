import React from 'react';
import { ComponentMeta } from '@storybook/react';
import FormBuilder from '../FormBuilder';
import FormBuilderProvider from '../FormBuilderProvider';
import { useFormField } from '../hooks';
import { isNonEmptyString } from '@enterwell/react-form-validation';
import { useState } from '@storybook/addons';

export default {
  title: 'FormBuilder',
  component: FormBuilder
} as ComponentMeta<typeof FormBuilder>;

const components = {
  string: (props: any) => <input {...props} />,
  email: (props: any) => <input type="email" {...props} />
};

const wrapper = {
  wrapper: (props: any) => <div style={{ display: 'flex', flexDirection: 'column' }} {...props} />,
  fieldWrapper: (props: any) => <div style={{ padding: '12px' }} {...props} />
}

const emailOverride = {
  email: (props: any) => <input type="email" style={{ backgroundColor: 'cornflowerblue' }} {...props} />
};

const emailValidation = (value: any) => /^.+@\S+\.\S+$/.test(value);

export const Empty = () => {
  const form = {};

  return (
    <FormBuilderProvider components={components}>
      <FormBuilder form={form} />
    </FormBuilderProvider>
  );
};


export const UndefinedField = () => {
  const form = {
    unknown: undefined
  };

  return (
    <FormBuilderProvider components={components}>
      <FormBuilder form={form} />
    </FormBuilderProvider>
  );
};

export const InvalidComponentType = () => {
  const form = {
    unknown: useFormField('', () => true, 'unknown')
  };

  return (
    <FormBuilderProvider components={components}>
      <FormBuilder form={form} />
    </FormBuilderProvider>
  );
};

export const Simple = () => {
  const [error, setError] = useState(false);
  const form = {
    name: useFormField('', isNonEmptyString, 'string', "User name"),
    email: useFormField('', emailValidation, 'email', "E-mail")
  };

  const handleSubmit = () => {
    setError(form.email.error || form.name.error);
  };

  return (
    <FormBuilderProvider components={components}>
      <FormBuilder form={form} />
      <button type='submit' onClick={handleSubmit}>submit</button>
      <span>Error: {error ? 'yes' : 'no'}</span>
    </FormBuilderProvider>
  );
};

export const Wrapper = () => {
  const [error, setError] = useState(false);
  const form = {
    name: useFormField('', isNonEmptyString, 'string', "User name"),
    email: useFormField('', emailValidation, 'email', "E-mail")
  };

  const handleSubmit = () => {
    setError(form.email.error || form.name.error);
  };

  return (
    <FormBuilderProvider components={{ ...components, ...wrapper }}>
      <FormBuilder form={form} />
      <button type='submit' onClick={handleSubmit}>submit</button>
      <span>Error: {error ? 'yes' : 'no'}</span>
    </FormBuilderProvider>
  );
};

export const ProviderOverride = () => {
  const [error, setError] = useState(false);
  const form = {
    name: useFormField('', isNonEmptyString, 'string', "User name"),
    email: useFormField('', emailValidation, 'email', "E-mail")
  };

  const handleSubmit = () => {
    setError(form.email.error || form.name.error);
  };

  return (
    <FormBuilderProvider components={{ ...components, ...wrapper }}>
      <FormBuilderProvider components={emailOverride}>
        <FormBuilder form={form} />
        <button type='submit' onClick={handleSubmit}>submit</button>
        <span>Error: {error ? 'yes' : 'no'}</span>
      </FormBuilderProvider>
    </FormBuilderProvider>
  );
};
