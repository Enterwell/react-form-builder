import React, { useContext } from 'react';
import { FormBuilderProviderProps } from './FormBuilderProvider.types';
import { FormBuilderProviderContext } from './FormBuilderProviderContext';

export default function FormBuilderProvider(props: FormBuilderProviderProps) {
    const context = useContext(FormBuilderProviderContext);

    return (
        <FormBuilderProviderContext.Provider value={{ components: { ...context?.components, ...props.components } }}>
            {props.children}
        </FormBuilderProviderContext.Provider>
    );
}