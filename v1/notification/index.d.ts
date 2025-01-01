export type NotificationProps = {
    id: string;
    title: string;
    message: string;
    onClose: () => void;
};
export declare function Notification(notification: NotificationProps): import("react/jsx-runtime").JSX.Element;
