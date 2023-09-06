import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [selectedIdxes, setSelectedIdxes] = useState<number[]>([]);
    const [completedTodos, setCompletedTodos] = useState<number[]>([]);

    const [inputValue, setInputValue] = useState<string>("");

    const addTodo = (todo: string) => {
        if (todo === "") return;
        setTodos((prev) => [...prev, todo]);
        setInputValue("");
    };

    const toggleComplete = (targetIdx: number) => () => {
        // toggle completedTodos
        setCompletedTodos((prev) => {
            if (prev.includes(targetIdx)) {
                return prev.filter((idx) => idx !== targetIdx);
            } else {
                return [...prev, targetIdx];
            }
        });
    };

    const toggleHighlight = (targetIdx: number) => () => {
        setSelectedIdxes((prev) => {
            if (prev.includes(targetIdx)) {
                return prev.filter((idx) => idx !== targetIdx);
            } else {
                return [...prev, targetIdx];
            }
        });
    };

    const isHighlighted = (idx: number) => selectedIdxes.includes(idx);
    const isCompleted = (idx: number) => completedTodos.includes(idx);

    return (
        <div>
            {todos.length === 0 ? (
                <div>No Todo</div>
            ) : (
                <div className="list-group">
                    {todos.map((todo, idx) => (
                        <TodoItem
                            key={idx}
                            todo={todo}
                            isCompleted={isCompleted(idx)}
                            isHighlighted={isHighlighted(idx)}
                            toggleTodo={toggleHighlight(idx)}
                            completeTodos={toggleComplete(idx)}
                        />
                    ))}
                </div>
            )}

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="button"
                    onClick={() => {
                        addTodo(inputValue);
                        setInputValue("");
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default TodoList;
