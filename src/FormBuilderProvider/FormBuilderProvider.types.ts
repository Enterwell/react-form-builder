import React from "react"
import { FieldConfig } from "../index.types";

type FunctionComponent<Props> = (props: Props) => JSX.Element;
type ClassComponent<Props> = new (props: Props) => JSX.ElementClass;
type Component<Props> = FunctionComponent<Props> | ClassComponent<Props>;

export type EventTargetValue = { target: { value: any; name: string } };

export type FormBuilderComponent = Component<{ 
    value?: any, 
    label?: string,
    error?: boolean,
    helperText?: string,
    onBlur: (e: any, config?: FieldConfig) => void,
    onChange: (eventOrValue: EventTargetValue | any, config?: FieldConfig) => void,
    onKeyPress: React.KeyboardEventHandler<HTMLDivElement>
}>;

export type FormBuilderComponents = {
    [key: string]: FormBuilderComponent
}  & {
    wrapper?: Component<any>,
    fieldWrapper?: Component<any>
}

export interface FormBuilderProviderProps {
    children?: React.ReactNode, 
    components: FormBuilderComponents
}