import checkSquareLogo from "../assets/checked-square.svg";
import squareLogo from "../assets/square.svg";

interface TodoItemProps {
    todo: string;
    isCompleted: boolean;
    isHighlighted: boolean;
    toggleTodo: () => void;
    completeTodos: () => void;
}

const TodoItem = ({
    todo,
    isCompleted,
    isHighlighted,
    toggleTodo,
    completeTodos,
}: TodoItemProps) => {
    console.log("🚀 ~ file: TodoItem.tsx:19 ~ isCompleted:", isCompleted);
    console.log("🚀 ~ file: TodoItem.tsx:19 ~ isHighlighted:", isHighlighted);
    return (
        <div
            onClick={toggleTodo}
            className={`list-group-item form-check todo-item ${
                isCompleted ? "disable" : isHighlighted ? "active" : ""
            }`}
        >
            <img
                onClick={completeTodos}
                className="todo-icon"
                src={isCompleted ? checkSquareLogo : squareLogo}
            />
            <span className={`${isCompleted && "todo-text-done"}`}>{todo}</span>
        </div>
    );
};

export default TodoItem;
