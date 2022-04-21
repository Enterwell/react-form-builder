import React, { useContext, useMemo } from 'react';
import { FormBuilderProviderProps } from './FormBuilderProvider.types';
import { FormBuilderProviderContext } from './FormBuilderProviderContext';

export default function FormBuilderProvider(props: FormBuilderProviderProps) {
    const context = useContext(FormBuilderProviderContext);
    const combined = useMemo(
        () => ({ components: { ...context?.components, ...props.components } }),
        [context?.components, props.components]);

    return (
        <FormBuilderProviderContext.Provider value={combined}>
            {props.children}
        </FormBuilderProviderContext.Provider>
    );
}