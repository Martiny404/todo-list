import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

const TodoList = ({ todos, toggleTodoCompleted, deleteTodo, openModal }) => {
	return (
		<ul className="TodoList">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					openModal={openModal}
					{...todo}
					toggleTodoCompleted={toggleTodoCompleted}
					deleteTodo={deleteTodo}
				/>
			))}
		</ul>
	);
};

export default TodoList;
