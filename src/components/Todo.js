import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "ok" : "not-ok"}{" "}
        <span
        className={cx(
            "todo-item_text",
            todo && todo.completed && "todo-item_text--completed"
        )}
        >
            {todo.content}
        </span>
    </li>
);

export default connect(
    null,
    { toggleTodo }
)(Todo);