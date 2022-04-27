import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import Header from './Layout/Header/Header';
const App = () => {
	return (
		<div className="app-container">
			<div className="todoContent">
				<Header />
				<TodoForm />
			</div>
		</div>
	);
};

export default App;
