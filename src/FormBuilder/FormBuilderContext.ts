import React from "react";
import { FormItems } from "./FormBuilder.types";

const FormBuilderContext = React.createContext<{
    submit: () => void,
    form: FormItems
} | undefined>({submit: () => {}, form: {}});

export default FormBuilderContext;