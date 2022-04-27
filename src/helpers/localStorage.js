export function getFromLocalStorage() {
	const json = localStorage.getItem('todos');
	if (!json) {
		return [];
	}
	return JSON.parse(json);
}

export function setToLocalStorage(data) {
	const json = JSON.stringify(data);
	localStorage.setItem('todos', json);
}
