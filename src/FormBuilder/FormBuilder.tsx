import React, { useContext } from "react";
import FormBuilderField from "../FormBuilderField";
import FormBuilderContext from "./FormBuilderContext";
import { submitForm } from '@enterwell/react-form-validation';
import { FormBuilderProviderContext } from "../FormBuilderProvider/FormBuilderProviderContext";
import { FormBuilderProps } from "./FormBuilder.types";

function UndefinedField({ fieldName }: { fieldName: string }) {
    return <div style={{
        color: '#FF8080',
        padding: '12px',
        backgroundColor: '#290000',
        borderRadius: 8
    }}>{`Undefined form field "${fieldName}"`}</div>
}

export default function FormBuilder(props: FormBuilderProps) {
    const {
        form,
        onSubmit,
        children
    } = props;
    const context = useContext(FormBuilderProviderContext);

    const Wrapper = context.components.wrapper ?? React.Fragment;
    const FieldWrapper = context.components.fieldWrapper ?? React.Fragment;

    return (
        <FormBuilderContext.Provider value={{
            submit: () => submitForm(form, onSubmit),
            form: form
        }}>
            <Wrapper>
                {children ?? Object.keys(form).map(fieldName => {
                    const field = form[fieldName];
                    if (field != null) {
                        return (
                            <FieldWrapper key={fieldName}>
                                <FormBuilderField field={field} />
                            </FieldWrapper>
                        );
                    }
                    return (
                        <FieldWrapper key={fieldName}>
                            <UndefinedField fieldName={fieldName} />
                        </FieldWrapper>
                    );
                })}
            </Wrapper>
        </FormBuilderContext.Provider>
    );
}