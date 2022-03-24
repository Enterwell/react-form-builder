import React from 'react';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { memo } from "react";

const components = {
    string: memo((props) => <TextField variant="standard" {...props} />),
    wrapper: (props) => <Stack spacing={2} {...props} />
};

export default components;