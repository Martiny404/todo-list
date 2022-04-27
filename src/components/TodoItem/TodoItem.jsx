import React from 'react';

const TodoItem = ({ title, completed, id, toggleTodoCompleted, deleteTodo, openModal }) => {
	return (
		<li className="TodoListItem">
			<label>
				<input type="checkbox" className="filled-in" onChange={() => toggleTodoCompleted(id)} checked={completed} />
				<span></span>
			</label>
			<h3
				className={`TodoListItemTitle ${completed ? 'completed' : 'default'}`}
				onClick={() => (!completed ? openModal(id) : null)}
			>
				{title}{' '}
			</h3>
			<button onClick={() => deleteTodo(id)} className="TodoListItemDelete">
				<i className="material-icons">delete_forever</i>
			</button>
		</li>
	);
};

export default TodoItem;
