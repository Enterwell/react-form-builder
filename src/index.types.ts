export interface FormField {
    // react-form-validation fields
    value?: any | undefined,
    error: boolean,
    errorMessages?: string[] | undefined,
    onChange: (value: any) => void,

    // react-form-builder
    type: string,
    label?: string | undefined
}
