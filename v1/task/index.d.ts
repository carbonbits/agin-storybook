export type TaskProps = {
    id: string;
    title: string;
    state: string;
    onArchiveTask: () => void;
    onPinTask: () => void;
};
export default function Task(task: TaskProps): import("react/jsx-runtime").JSX.Element;
