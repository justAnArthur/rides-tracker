import { getCookie } from "../utils.js";

const LogoutButton = () => {

	const user = getCookie('user')

	function handleLogout() {
		if (user) {
			document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
			window.location.href = '/login'
		}
	}

	return user
		? <button type="button" onClick={handleLogout}>
			{`logout ${JSON.parse(user).email}`}
		</button>
		: <span>
			<a href="/login">login</a>
			{' '}
			<a href="/register">register</a>
		</span>
}


export default ({ children }) => {
	return <div className="p-6 w-full h-screen bg-gray-100 flex flex-col gap-6">
		<header className="flex justify-between p-4 rounded-xl bg-white">
			react-rides-tracker
			<LogoutButton/>
		</header>
		{children}
	</div>
}