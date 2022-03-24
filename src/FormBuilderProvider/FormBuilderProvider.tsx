import React from 'react';
import { FormBuilderProviderProps } from './FormBuilderProvider.types';
import { FormBuilderProviderContext } from './FormBuilderProviderContext';

export default function FormBuilderProvider(props: FormBuilderProviderProps) {
    return (
        <FormBuilderProviderContext.Provider value={{ components: props.components }}>
            {props.children}
        </FormBuilderProviderContext.Provider>
    );
}