export default () => {
	fetch('/api/user')
		.then(res => res.json())
		.then(data => console.log(data))

	return 'dashboard'
}