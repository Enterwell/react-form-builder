import React, { useContext, useMemo } from 'react';
import type { FormBuilderProviderProps } from './FormBuilderProvider.types';
import { FormBuilderProviderContext } from './FormBuilderProviderContext';

export default function FormBuilderProvider({ components, children }: FormBuilderProviderProps) {
    const context = useContext(FormBuilderProviderContext);
    const combined = useMemo(
        () => ({ components: { ...context?.components, ...components } }),
        [context?.components, components]);

    return (
        <FormBuilderProviderContext.Provider value={combined}>
            {children}
        </FormBuilderProviderContext.Provider>
    );
}