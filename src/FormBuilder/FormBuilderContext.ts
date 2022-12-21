import { createContext } from "react";
import type { FormItems } from "./FormBuilder.types";

const FormBuilderContext = createContext<{
    submit: () => void,
    form: FormItems
} | undefined>({submit: () => {}, form: {}});

export default FormBuilderContext;