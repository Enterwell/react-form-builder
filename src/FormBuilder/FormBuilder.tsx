import React, { Fragment, useContext, useMemo } from "react";
import FormBuilderField from "../FormBuilderField";
import FormBuilderContext from "./FormBuilderContext";
import { submitForm } from '@enterwell/react-form-validation';
import { FormBuilderProviderContext } from "../FormBuilderProvider/FormBuilderProviderContext";
import type { FormBuilderProps } from "./FormBuilder.types";
import InvalidPlaceholder from "./InvalidPlaceholder";

export default function FormBuilder(props: FormBuilderProps) {
    const {
        form,
        onSubmit,
        children
    } = props;
    const context = useContext(FormBuilderProviderContext);

    const Wrapper = useMemo(() => context.components.wrapper ?? Fragment, [context.components.wrapper]);
    const FieldWrapper = useMemo(() => (
        context.components.fieldWrapper ??
        (({ children }: { children: JSX.Element | JSX.Element[] }) => <>{children}</>)
    ), [context.components.fieldWrapper]);

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
                            <FieldWrapper key={fieldName} field={field}>
                                <FormBuilderField field={field} />
                            </FieldWrapper>
                        );
                    }
                    return (
                        <FieldWrapper key={fieldName}>
                            <InvalidPlaceholder fieldName={`empty field ${fieldName}`} />
                        </FieldWrapper>
                    );
                })}
            </Wrapper>
        </FormBuilderContext.Provider>
    );
}