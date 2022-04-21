export interface FormValidation {
    value?: any,
    error: boolean,
    errorMessages?: string[],
    onChange: (value: any) => void,
    onBlur: () => void,
    validate: (value: any) => boolean | Promise<boolean>
}

export interface FormField extends FormValidation {
    type: string,
    label?: string
}

export declare interface FieldConfig {
    receiveEvent?: boolean,
    reversed?: boolean,
    ignoreDirtiness?: boolean
}