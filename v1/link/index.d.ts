export interface LinkProps {
    href: string;
    children?: React.ReactNode;
    target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';
    rel?: string;
    className?: string;
}
export declare function Link({ href, children, target, rel, className, }: LinkProps): import("react/jsx-runtime").JSX.Element;
