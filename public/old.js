// const [filters, setFilters] = useState([
// 	{ filterType: 'all', icon: 'select_all', activeClass: '' },
// 	{ filterType: 'completed', icon: 'done', activeClass: '' },
// 	{ filterType: 'uncompleted', icon: 'radio_button_unchecked', activeClass: '' },
// ]);

// function EnterPrompt(type) {
// 	const copy = [...filters];
// 	const current = copy.find((f) => f.filterType === type);
// 	current.activeClass = 'filterListItemPromptActive';
// 	setFilters(copy);
// }

// function LeavePrompt(type) {
// 	const copy = [...filters];
// 	const current = copy.find((f) => f.filterType === type);
// 	current.activeClass = '';
// 	setFilters(copy);
// }

// onMouseLeave={() => LeavePrompt(filter.filterType)}
// onMouseEnter={() => EnterPrompt(filter.filterType)}
