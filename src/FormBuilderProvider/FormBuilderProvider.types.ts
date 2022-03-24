import React from "react"

type FunctionComponent<Props> = (props: Props) => JSX.Element;
type ClassComponent<Props> = new (props: Props) => JSX.ElementClass;
type Component<Props> = FunctionComponent<Props> | ClassComponent<Props>;

export type FormBuilderComponent = Component<{ 
    value?: any | undefined, 
    label?: string | undefined,
    error?: boolean | undefined,
    helperText?: string | undefined,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined,
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement> | undefined
}>;

export type FormBuilderComponents = {
    [key: string]: FormBuilderComponent
}  & {
    wrapper?: Component<any>,
    fieldWrapper?: Component<any>
}

export interface FormBuilderProviderProps {
    children?: React.ReactNode | undefined, 
    components: FormBuilderComponents
}