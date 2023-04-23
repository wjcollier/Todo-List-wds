export function TodoItem({ completed, id, title, toggleTodo, deleteTodo}) {
	return (
		<li>
			<label>
				<input
					type='checkbox'
					checked={completed}
					onChange={(e) => toggleTodo(id, e.target.checked)}
				/>
				{title}
			</label>
			<button onClick={() => deleteTodo(id)} className='btn btn-danger'>
				Delete
			</button>
		</li>
	)
}
TodoItem.defaultProps = {
	completed: false,
	id: '',
	title: '',
	toggleTodo: () => console.warn('toggleTodo is not defined'),
	deleteTodo: () => console.warn('deleteTodo is not defined'),
}