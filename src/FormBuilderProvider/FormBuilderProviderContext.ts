import { createContext } from "react";
import type { FormBuilderComponents } from "./FormBuilderProvider.types";

export const FormBuilderProviderContext = createContext<{ components: FormBuilderComponents }>({
    components: {}
});