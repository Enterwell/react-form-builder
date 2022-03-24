# react-form-builder

Form builder functionality for React

## Getting started

### Installation

```bash
yarn add @enterwell/react-form-builder
```

### Usage

Somewhere at the beginning of your application register component provider (this is required, but all component types are optional). For Next.JS project this can be in `_app.tsx`.

```js
import { FormBuilderProvider } from 'react-form-builder';

const components = {
    string: memo((props) => <TextField {...props} />),
    wrapper: (props) => <Stack spacing={2} {...props} />
};

<FormBuilderProvider components={formComponents}>
    ...
</FormBuilderProvider>
```

In the component you want to render form configure form and render using `FormBuilder`.

```js
const form = {
    name: useFormField('', isNonEmptyString, 'string', 'Name'),
};

<FormBuilder form={form} />
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

### Running the example

1. Build the library using `yarn build`
2. Inside example/react-starter directory run:
    - `yarn install`
    - `yarn build`
    - `yarn start`

### Troubleshooting development

#### Invalid hook call in example app

- run `npm link` in `/examples/react-starter/node_modules/react`. This should make the React's global link
- run `npm link react` in `/`. This should make the library use the application’s React copy
