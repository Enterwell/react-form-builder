import React, { useContext } from "react";
import FormBuilderContext from "../FormBuilder/FormBuilderContext";
import InvalidPlaceholder from "../FormBuilder/InvalidPlaceholder";
import { FormBuilderProviderContext } from "../FormBuilderProvider/FormBuilderProviderContext";
import { FormField } from "../index.types";

export interface FormBuilderFieldsProps {
    field: FormField
}

export default function FormBuilderField(props: FormBuilderFieldsProps) {
    const { field } = props;
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

    if (!Component)
        return <InvalidPlaceholder fieldName={`component type ${type}`} />

    return (
        <Component
            value={value}
            label={label}
            error={error}
            helperText={error && errorMessages ? errorMessages.join('. ') : undefined}
            onChange={(e) => onChange && onChange(e)}
            onBlur={() => onBlur && onBlur()}
            onKeyPress={(e) => { if (e.key === 'Enter' && formContext) formContext.submit(); }} />
    );
}