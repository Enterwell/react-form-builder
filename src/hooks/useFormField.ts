import { useValidation } from '@enterwell/react-form-validation';

const useFormField = (
    initialValue: any | undefined, 
    validationFn: (value: any) => Promise<boolean> | boolean, 
    type: string, 
    label?: string | undefined,
    config?: object | undefined) => {
    const validation = useValidation(initialValue, validationFn, config);

    return {
        ...validation,
        type: type,
        label: label
    };
};

export default useFormField;