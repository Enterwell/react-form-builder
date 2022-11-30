import React from 'react';
import { ComponentMeta } from '@storybook/react';
import FormBuilder from '../FormBuilder';
import FormBuilderProvider from '../FormBuilderProvider';
import { useFormField } from '../hooks';
import { isNonEmptyString } from '@enterwell/react-form-validation';

export default {
  title: 'FormBuilder',
  component: FormBuilder
} as ComponentMeta<typeof FormBuilder>;

const components = {
  string: (props: any) => <input {...props} placeholder={props.label} style={{ borderRadius: 8, border: '1px solid rgba(0,0,0,.2)', padding: '8px 12px' }} />,
  email: (props: any) => <input type="email" {...props} placeholder={props.label} style={{ borderRadius: 8, border: '1px solid rgba(0,0,0,.2)', padding: '8px 12px' }} />
};

const wrapper = {
  wrapper: (props: any) => <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }} {...props} />,
  fieldWrapper: (props: any) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {props.children}
      {props.field.error && <small style={{ color: 'red' }}>❌ Validation failed</small>}
    </div>
  )
}

const emailOverride = {
  email: (props: any) => <input type="email" style={{ backgroundColor: 'cornflowerblue' }} placeholder={props.label} {...props} />
};

const emailValidation = (value: any) => /^.+@\S+\.\S+$/.test(value);

function Container({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <div style={{
      maxWidth: 520,
      border: '1px solid rgba(0, 0, 0, 0.1)',
      padding: 32,
      borderRadius: 12,
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      fontFamily: 'sans-serif',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>{children}</div>
  )
}

function ErrorIndicator({error}: {error: boolean}) {
  return <div style={{ color: error ? 'red' : 'green', fontWeight: error ? 'bold' : 'normal' }}>{error ? '❌ Some errors' : '✅ No errors'}</div>
}

export const Empty = () => {
  const form = {};

  return (
    <Container>
      <FormBuilderProvider components={components}>
        <FormBuilder form={form} />
      </FormBuilderProvider>
      <small>Form with no fields</small>
    </Container>
  );
};


export const UndefinedField = () => {
  const form = {
    unknown: undefined
  };

  return (
    <Container>
      <FormBuilderProvider components={components}>
        <FormBuilder form={form} />
      </FormBuilderProvider>
      <small>Form with one field of value <code>undefined</code></small>
    </Container>
  );
};

export const InvalidComponentType = () => {
  const form = {
    unknown: useFormField('', () => true, 'sometype')
  };

  return (
    <Container>
      <FormBuilderProvider components={components}>
        <FormBuilder form={form} />
      </FormBuilderProvider>
      <small>Form with one field of not registered type <code>sometype</code></small>
    </Container>
  );
};

export const Simple = () => {
  const form = {
    name: useFormField('', isNonEmptyString, 'string', "User name (isNonEmpty)"),
    email: useFormField('', emailValidation, 'email', "E-mail (emailValidation)")
  };

  const error = form.email.error || form.name.error;

  return (
    <Container>
      <FormBuilderProvider components={components}>
        <FormBuilder form={form} />
        <ErrorIndicator error={error} />
      </FormBuilderProvider>
      <small>Form with two fields <code>name</code> and <code>email</code> with validation</small>
    </Container>
  );
};

export const Wrapper = () => {
  const form = {
    name: useFormField('', isNonEmptyString, 'string', "User name"),
    email: useFormField('', emailValidation, 'email', "E-mail")
  };

  const error = form.email.error || form.name.error;

  return (
    <Container>
      <FormBuilderProvider components={{ ...components, ...wrapper }}>
        <FormBuilder form={form} />
      </FormBuilderProvider>
      <small>Form with two fields and a form field and container wrappers. Field wrapper adds validation indicator and container wrapper orders elements horizontally.</small>
    </Container>
  );
};

export const ProviderOverride = () => {
  const form = {
    name: useFormField('', isNonEmptyString, 'string', "User name"),
    email: useFormField('', emailValidation, 'email', "E-mail")
  };

  const error = form.email.error || form.name.error;

  return (
    <Container>
      <FormBuilderProvider components={{ ...components, ...wrapper }}>
        <FormBuilderProvider components={emailOverride}>
          <FormBuilder form={form} />
          <ErrorIndicator error={error} />
        </FormBuilderProvider>
      </FormBuilderProvider>
    </Container>
  );
};
