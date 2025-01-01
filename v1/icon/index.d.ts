import { default as React } from '../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { AginSupportedIcons } from './supported-icons';
export interface IconProps {
    variant: keyof typeof AginSupportedIcons;
    weight: "solid" | "outline";
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
    color?: string;
    className?: string;
}
export declare function Icon({ variant, size, className }: IconProps): React.FunctionComponentElement<import('react-icons/lib').IconBaseProps>;
