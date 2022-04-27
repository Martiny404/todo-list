import React, { useState } from 'react';
import './TodoModal.scss';
const TodoModal = ({ closeModal, current, editTodo }) => {
	const [editable, setEditabe] = useState(true);
	const [newData, setNewData] = useState({
		title: '',
		descr: '',
	});

	function saveNewTodo() {
		if (newData.title.length < 4 || newData.descr.length < 4) {
			return;
		}
		editTodo(current.id, newData.title, newData.descr);
		setNewData({
			title: '',
			descr: '',
		});
		closeModal();
	}

	return (
		<div className="overlay" onClick={closeModal}>
			<div className="TodoModal" onClick={(e) => e.stopPropagation()}>
				<button onClick={closeModal} className="TodoModalCloseBtn">
					<i className="material-icons prefix">close</i>
				</button>
				<div className={`TodoModalField ${!editable ? 'TodoModalFieldActive' : ''}`}>
					<input
						onChange={(e) => setNewData({ ...newData, title: e.target.value })}
						disabled={editable}
						type="text"
						value={newData.title}
						placeholder={current.title}
					/>
				</div>
				<div className={`TodoModalField ${!editable ? 'TodoModalFieldActive' : ''}`}>
					<textarea
						onChange={(e) => setNewData({ ...newData, descr: e.target.value })}
						disabled={editable}
						value={newData.descr}
						placeholder={current.descr}
						id="icon_prefix2"
						className="materialize-textarea"
					></textarea>
					<button onClick={() => setNewData({ ...newData, descr: '' })}>
						<i className="material-icons prefix">mode_edit</i>
					</button>
				</div>
				<div className="TodoModalBtns">
					<button className="red lighten-1 waves-effect waves-light btn" onClick={() => setEditabe(!editable)}>
						EDIT
					</button>
					<button className="deep-purple lighten-1 waves-effect waves-light btn" onClick={saveNewTodo}>
						SAVE
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodoModal;
