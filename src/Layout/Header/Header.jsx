import React from 'react';
import './Header.scss';
const Header = () => {
	return (
		<header className="todoHeader">
			<i className="material-icons todoHeaderIcon">playlist_add_check</i>
			<h1 className="todoHeaderTitle">Todo List</h1>
		</header>
	);
};

export default Header;
