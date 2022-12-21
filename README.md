<h1 align="center">
    @Enterwell</br>React Form Builder
</h1>

<p align="center">
    Simplifies form rendering. Doesn't mess with your components. Simple and straight to the point.
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/@enterwell/react-form-builder)](https://www.npmjs.com/package/@enterwell/react-form-builder)
[![Build and publish](https://github.com/Enterwell/react-form-builder/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Enterwell/react-form-builder/actions/workflows/npm-publish.yml)
[![Bundle size](https://badgen.net/bundlephobia/minzip/@enterwell/react-form-builder)](https://bundlephobia.com/package/@enterwell/react-form-builder)

</div>

## Features

- All funtionality of [@enterwell/react-form-validation]
  - Keeps form's state and validation results
  - Supports any kind of validation functions
  - Dirty checking
  - Separates data from view
  - Relies on hooks, but can easily be used with class components
- Any UI library
- Support for custom layouts

## Getting started

### Installation

```bash
yarn add @enterwell/react-form-builder
```

### Usage

Somewhere at the beginning of your application register component provider (this is required, but all component types are optional). For Next.JS project this can be in `_app.tsx`.

```js
import { FormBuilderProvider } from '@enterwell/react-form-builder';

const components = {
    string: memo((props) => <TextField {...props} />),
    wrapper: (props) => <Stack spacing={2} {...props} />,
    fieldWrapper: memo(() => <Box p={2} />
};

<FormBuilderProvider components={formComponents}>
    ...
</FormBuilderProvider>
```

Inside component create form definition render using `<FormBuilder />`.

```js
import { FormBuilder, useFormField } from '@enterwell/react-form-builder';
import { isNonEmptyString } from '@enterwell/react-form-validation';

const form = {
    name: useFormField('', isNonEmptyString, 'string', 'Name'),
};

<FormBuilder form={form} onSubmit={handleSubmit} />
```

### API

For details, see TypeScript generated typings.

#### `<FormBuilderProvider components={components} />`

Holds shared components collection.

Use this to wrap your top-most form content component to enable rendering components for requested types.

There is no pre-defined components, all types must be defined on per-project basis.

#### `useFormField(initialValue, validationFn, type, label, config)`

Defines the form field.

Shared some properties with @enterwell/react-form-validation, adds type and label. Type is used to select which component will be rendered, label is injected as component prop.

#### `<FormBuilder form={form} onSubmit={handleSubmit} />`

Renders the form.

- `wrapper` type is provided in `FormBuilderProvider` components, it will be used to wrap all fields of the form.
- `wrapperField` type is provided in `FormBuilderProvider` components, it will be used to wrap all `FormBuilderField` that are rendered in the form.
- children are passed to this component, it will only render the wrapper and children.

#### `<FormBuilderField field={field} />`

Renders the form field.

Fields use `FormBuilderProvider` to select component based on field type and injects some props into the components:

- value
- label
- error
- helperText
- onChange
- onKeyDown

### Advanced usage

#### Custom layout

Use `<FormBuilderField />` manually position fields inside form using custom layout.
When children are present in form builder, automatic field and wrapper rendering is disabled - user is responsible for rendering fields.

```js
import { FormBuilderField } from '@enterwell/react-form-builder';

<FormBuilder form={form}>
    <Stack direction="row" spacing={2}>
        <FormBuilderField field={form.name} />
        <FormBuilderField field={form.email} />
    </Stack>
</FormBuilder>
```

#### Override components

You can nest `FormBuilderProvider` inside other provider. The bottom provider will take all components from its parent and override matching with newly provided component types.

```js
<FormBuilderProvider components={formComponentsA}>
    <FormBuilderProvider components={formComponentsB}>
        <!-- Can use both types from A and B, if B contains same type as A, B type is resolved here -->
    </FormBuilderProvider>
</FormBuilderProvider>
```

## Development

For development:

```bash
yarn install
yarn dev
```

To builde production:

```bash
yarn install
yarn build
```
