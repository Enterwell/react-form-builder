export interface FormValidation {
    value?: any | undefined,
    error: boolean,
    errorMessages?: string[] | undefined,
    onChange: (value: any) => void,
    onBlur: () => void,
    validate: (value: any) => boolean | Promise<boolean>
}

export interface FormField extends FormValidation {
    type: string,
    label?: string | undefined
}
