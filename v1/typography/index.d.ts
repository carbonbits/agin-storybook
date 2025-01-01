import { default as React, ReactNode } from '../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { Colors } from '../colors/color.types.ts';
interface TypographyProps {
    children: ReactNode;
    className?: string;
    style?: "normal" | "bold" | "italic" | "underline" | "overline";
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    color?: Colors;
}
export declare function Typography({ children, variant, className, color, }: TypographyProps): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export {};
