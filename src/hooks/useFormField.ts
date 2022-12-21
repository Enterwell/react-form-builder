import { useValidation } from '@enterwell/react-form-validation';
import type { FieldConfig, FormValidation } from '../index.types';

export default function useFormField(
    initialValue: any | undefined, 
    validationFn: (value: any) => Promise<boolean> | boolean, 
    type: string, 
    label?: string,
    config?: FieldConfig) { 
    return {
        ...useValidation(initialValue, validationFn, config) as FormValidation,
        type,
        label
    };
}