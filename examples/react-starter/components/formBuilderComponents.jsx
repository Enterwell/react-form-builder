/* eslint-disable react/display-name */
import React, { memo } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const components = {
  string: memo((props) => <TextField variant="standard" {...props} />),
  wrapper: (props) => <Stack spacing={2} {...props} />
};

export default components;
