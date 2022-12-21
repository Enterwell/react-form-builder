import React, { useContext, type KeyboardEvent } from "react";
import FormBuilderContext from "../FormBuilder/FormBuilderContext";
import InvalidPlaceholder from "../FormBuilder/InvalidPlaceholder";
import { FormBuilderProviderContext } from "../FormBuilderProvider/FormBuilderProviderContext";
import type { FormField } from "../index.types";

export type FormBuilderFieldsProps = {
    field: FormField
};

export default function FormBuilderField({ field }: FormBuilderFieldsProps) {
    const {
        value,
        error,
        errorMessages,
        type,
        label,
        onChange,
        onBlur
    } = field;

    const context = useContext(FormBuilderProviderContext);
    const formContext = useContext(FormBuilderContext);
    const Component = context.components[type];

    return !Component
        ? <InvalidPlaceholder fieldName={`component type ${type}`} />
        : (
            <Component
                value={value}
                label={label}
                error={error}
                helperText={error && errorMessages ? errorMessages.join('. ') : undefined}
                onChange={(e, config) => onChange(e, config)}
                onBlur={(e, config) => onBlur(e, config)}
                onKeyDown={(e: KeyboardEvent<HTMLDivElement> | KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter' && formContext) formContext.submit(); }} />
        );
}