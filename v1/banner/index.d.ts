import { ReactElement, ReactNode } from '../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { Colors } from '../colors/color.types';
export interface IBanner {
    children: ReactNode | ReactElement;
    backgroundColor: Colors;
    className?: string;
}
export declare function Banner({ children, backgroundColor, className }: IBanner): import("react/jsx-runtime").JSX.Element;
