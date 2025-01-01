export type EmailInputProps = {
    value?: string;
    placeholder: string;
    onChange: () => void;
    name: string;
    hasError: boolean;
    classname?: string;
    label: string;
};
export declare function EmailInput({ value, placeholder, onChange, name, label, hasError, classname, }: EmailInputProps): import("react/jsx-runtime").JSX.Element;
