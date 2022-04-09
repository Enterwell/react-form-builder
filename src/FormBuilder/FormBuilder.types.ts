import React from "react";
import { FormField } from "../index.types";

export interface FormBuilderProps {
    children?: React.ReactNode;
    form: FormItems;
    onSubmit?: (formData: object) => void;
}

export interface FormItems {
    [key: string]: FormField | undefined;
}