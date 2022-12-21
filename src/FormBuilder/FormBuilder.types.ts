import type { ReactNode } from "react";
import type { FormField } from "../index.types";

export type FormBuilderProps = {
    children?: ReactNode;
    form: FormItems;
    onSubmit?: (formData: object) => void;
}

export type FormItems = {
    [key: string]: FormField | undefined;
}