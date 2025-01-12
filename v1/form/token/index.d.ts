export type ITokenInput = {
    value: string;
    onComplete?: () => void;
    length: number;
    validCharacters: string;
};
export declare function TokenInput({ length, validCharacters, onComplete, }: ITokenInput): import("react/jsx-runtime").JSX.Element;
