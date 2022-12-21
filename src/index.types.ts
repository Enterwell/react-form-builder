export type FormValidation = {
    value?: any,
    error: boolean,
    errorMessages?: string[],
    onChange: (value: any, config?: FieldConfig) => void,
    onBlur: (event: any, config?: FieldConfig) => void,
    validate: (value: any, config?: FieldConfig) => boolean | Promise<boolean>
}

export type FormField = FormValidation & {
    type: string,
    label?: string
}

export declare interface FieldConfig {
    receiveEvent?: boolean,
    reversed?: boolean,
    ignoreDirtiness?: boolean
}