import { ReactNode } from '../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
export interface IDivider {
    weight?: number;
    color?: string;
    className?: string;
    orientation?: "horizontal" | "vertical";
}
export declare function Divider({ weight, color, className, }: IDivider): ReactNode;
