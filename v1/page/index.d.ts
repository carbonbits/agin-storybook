import { Colors } from '../colors/color.types.ts';
export interface IPage {
    children: React.ReactNode;
    background: Colors;
}
export declare function Page({ children, background }: IPage): import("react/jsx-runtime").JSX.Element;
