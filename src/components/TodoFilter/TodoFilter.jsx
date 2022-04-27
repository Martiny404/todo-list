import React from 'react';
import './TodoFilter.scss';
const filters = [
	{ filterType: 'all', icon: 'select_all' },
	{ filterType: 'completed', icon: 'done' },
	{ filterType: 'uncompleted', icon: 'radio_button_unchecked' },
];

const TodoFilter = ({ filterTodo, setFilterTodo }) => {
	return (
		<ul id="padding-10" className="filterList TodoFormItem">
			{filters.map(({ filterType, icon }) => (
				<li className="filterListItem" key={filterType}>
					<button onClick={() => setFilterTodo(filterType)}>
						<i
							className={`material-icons filterListItemIcon ${
								filterTodo === filterType ? 'filterListItemIconActive' : ''
							}`}
						>
							{icon}
						</i>
					</button>
					<span className={`filterListItemPrompt ${filterTodo === filterType ? 'filterListItemPromptActive' : ''}`}>
						{filterType}
					</span>
				</li>
			))}
		</ul>
	);
};

export default TodoFilter;
