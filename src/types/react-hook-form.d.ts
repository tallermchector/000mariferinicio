// react-hook-form v6 types declaration
declare module "react-hook-form" {
  export interface FieldError {
    type: string;
    message?: string;
    ref?: any;
  }

  export interface FormState<T extends Record<string, any> = Record<string, any>> {
    errors: Partial<Record<keyof T, FieldError>>;
    isSubmitted: boolean;
    isSubmitting: boolean;
    isValid: boolean;
    dirtyFields: Partial<Record<keyof T, boolean>>;
    touchedFields: Partial<Record<keyof T, boolean>>;
    isDirty: boolean;
    submitCount: number;
  }

  export interface UseFormProps<T extends Record<string, any> = Record<string, any>> {
    mode?: "onSubmit" | "onBlur" | "onChange" | "all" | "onTouched";
    reValidateMode?: "onSubmit" | "onBlur" | "onChange";
    defaultValues?: Partial<T>;
    resolver?: any;
    context?: any;
    criteriaMode?: "firstError" | "all";
    shouldFocusError?: boolean;
    shouldUnregister?: boolean;
  }

  export interface UseFormReturn<T extends Record<string, any> = Record<string, any>> {
    register: (name: keyof T, options?: any) => any;
    unregister: (name: keyof T) => void;
    handleSubmit: (onValid: (data: T) => void, onInvalid?: (errors: any) => void) => (e: React.BaseSyntheticEvent) => Promise<void>;
    setValue: (name: keyof T, value: any, options?: { shouldValidate?: boolean; shouldDirty?: boolean; shouldTouch?: boolean }) => void;
    getValues: (payload?: { nest?: boolean }) => T;
    watch: (name?: keyof T | keyof T[], defaultValue?: any) => any;
    trigger: (name?: keyof T | keyof T[]) => Promise<boolean>;
    reset: (values?: Partial<T>) => void;
    clearErrors: (name?: keyof T) => void;
    setError: (name: keyof T, error: any, options?: { shouldFocus?: boolean }) => void;
    // v6 API: errors is directly on return, not in formState
    errors: Partial<Record<keyof T, FieldError>>;
    formState: FormState<T>;
    control: any;
  }

  export function useForm<T extends Record<string, any> = Record<string, any>>(props?: UseFormProps<T>): UseFormReturn<T>;
}