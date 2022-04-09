import { useValidation } from '@enterwell/react-form-validation';
import { FormValidation } from '../index.types';

const useFormField = (
    initialValue: any | undefined, 
    validationFn: (value: any) => Promise<boolean> | boolean, 
    type: string, 
    label?: string | undefined,
    config?: object | undefined) => {
    const validation = useValidation(initialValue, validationFn, config) as FormValidation;

    return {
        ...validation,
        type: type,
        label: label
    };
};

export default useFormField;