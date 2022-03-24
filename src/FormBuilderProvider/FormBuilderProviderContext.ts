import React from "react";
import { FormBuilderComponents } from "./FormBuilderProvider.types";

export const FormBuilderProviderContext = React.createContext<{ components: FormBuilderComponents }>({
    components: {}
});