export interface ImageProps {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    className?: string;
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'full';
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    objectPosition?: string;
    border?: string;
    boxShadow?: string;
    placeholder?: string;
    loading?: 'eager' | 'lazy';
    hoverEffect?: boolean;
    aspectRatio?: string;
}
export declare function Image({ src, alt, width, height, className, rounded, objectFit, objectPosition, border, boxShadow, placeholder, loading, hoverEffect, aspectRatio, }: ImageProps): import("react/jsx-runtime").JSX.Element;
