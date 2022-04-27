import React, { useEffect, useState } from 'react';
import TodoFilter from '../TodoFilter/TodoFilter';
import TodoList from '../TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';
import TodoAdd from '../TodoAdd/TodoAdd';
import { getFromLocalStorage, setToLocalStorage } from '../../helpers/localStorage';
import './TodoForm.scss';
import TodoModal from '../TodoModal/TodoModal';

const initialFormDataValue = {
	title: '',
	descr: '',
	id: '',
	completed: false,
};

const TodoForm = () => {
	const [todos, setTodos] = useState(getFromLocalStorage);
	const [filterTodo, setFilterTodo] = useState('all');
	const [formData, setFormData] = useState(initialFormDataValue);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [current, setCurrent] = useState(null);

	if (isModalOpen) {
		document.body.style.overflow = 'hidden';
	}

	useEffect(() => {
		setToLocalStorage(todos);
	}, [todos]);

	function filterTodos(type) {
		switch (type) {
			case 'all':
				return todos;
			case 'completed':
				return todos.filter((todo) => todo.completed === true);
			case 'uncompleted':
				return todos.filter((todo) => todo.completed === false);
			default:
				return todos;
		}
	}

	function toggleTodoCompleted(id) {
		const copy = [...todos];
		const current = copy.find((todo) => todo.id === id);
		current.completed = !current.completed;
		setTodos(copy);
	}

	function addTodoTask(todo) {
		if (todo.title.length < 4 || todo.descr.length < 4) {
			return;
		}
		setTodos([{ ...todo, id: uuidv4() }, ...todos]);
		setFormData(initialFormDataValue);
	}

	function deleteTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	function openModal(id) {
		const todo = todos.find((t) => t.id === id);
		setCurrent(todo);
		setIsModalOpen(true);
	}

	function closeModal() {
		setIsModalOpen(false);
		setCurrent(null);
	}

	function editTodo(id, title, descr) {
		const copy = [...todos];
		const current = copy.find((todo) => todo.id === id);
		current.title = title;
		current.descr = descr;
		setTodos(copy);
	}

	const filteredTodos = filterTodos(filterTodo);

	return (
		<div className="TodoForm">
			<TodoFilter filterTodo={filterTodo} setFilterTodo={setFilterTodo} />
			{todos.length > 0 && (
				<TodoList
					closeModal={closeModal}
					openModal={openModal}
					deleteTodo={deleteTodo}
					toggleTodoCompleted={toggleTodoCompleted}
					todos={filteredTodos}
					className="TodoFormItem"
				/>
			)}
			<TodoAdd addTodoTask={addTodoTask} setFormData={setFormData} formData={formData} />
			{isModalOpen && <TodoModal editTodo={editTodo} closeModal={closeModal} current={current} />}
		</div>
	);
};

export default TodoForm;
