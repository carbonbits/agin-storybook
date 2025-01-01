import { ReactNode } from '../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { Colors } from '../colors/color.types.ts';
interface ContainerProps {
    children: ReactNode;
    backgroundColor?: Colors;
    className?: string;
}
export declare function Container({ children, backgroundColor, className, }: ContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
