import React from 'react';
import './TodoAdd.scss';
const TodoAdd = ({ addTodoTask, setFormData, formData }) => {
	function handleAddTodo(e) {
		e.preventDefault();
	}

	return (
		<form onSubmit={handleAddTodo} className="TodoAdd">
			<div className="TodoAddInputs">
				<label>
					<input
						value={formData.title}
						onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
						name="title"
						type="text"
						placeholder="Task Title"
					/>
				</label>
				<label>
					<input
						value={formData.descr}
						onChange={(e) => setFormData((prev) => ({ ...prev, descr: e.target.value }))}
						name="descr"
						type="text"
						placeholder="Task Description"
					/>
				</label>
			</div>
			<button onClick={() => addTodoTask(formData)} className="deep-purple lighten-1 waves-effect waves-light btn">
				ADD TODO
			</button>
		</form>
	);
};

export default TodoAdd;
