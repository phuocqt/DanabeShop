import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};
function TodoList(props) {
  const { todos, onTodoClick } = props;
  function handleClick(todo, idx) {
    if (onTodoClick) {
      onTodoClick(todo, idx);
    }
  }

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <li
            className={todo.status}
            key={todo.id}
            onClick={() => {
              handleClick(todo, idx);
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
