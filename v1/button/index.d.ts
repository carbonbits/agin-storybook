import { default as React } from '../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { Colors } from '../colors/color.types';
import { AginSupportedIcons } from '../icon/supported-icons';
export interface IAginButton {
    children: React.ReactNode;
    textColor?: Colors;
    size: "large" | "small" | "medium";
    backgroundColor?: Colors;
    borderWidth?: "0" | "1" | "2" | "4" | "8";
    borderColor?: Colors;
    icon?: keyof typeof AginSupportedIcons;
    borderRadius?: "small" | "medium" | "large";
    type: "button" | "submit" | "reset";
    disabled?: boolean;
    isLoading?: boolean;
    className?: string;
}
export declare function AginButton({ children, size, icon, className, borderWidth, borderColor, backgroundColor, textColor, borderRadius, type, disabled, isLoading, }: IAginButton): import("react/jsx-runtime").JSX.Element;
