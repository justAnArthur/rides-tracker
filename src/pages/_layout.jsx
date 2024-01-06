<<<<<<< HEAD
import { getCookie } from "../utils.js";
import { Advertisement } from "../components/Advertisement.jsx";
=======
import { getCookie, useData } from "../utils.js";
>>>>>>> 16da994 (- files)

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

<<<<<<< HEAD
export default function Layout({ children }) {
	return <div>
		<header>
			react-rides-tracker{' '}
=======
const Advertisement = () => {
	const { data } = useData('/api/user/me')

	return JSON.stringify(data)
}


export default function Layout({ children }) {
	return <div className="p-6 w-full h-screen bg-gray-100 flex flex-col gap-6">
		<header className="flex justify-between rounded-xl bg-white">
			react-rides-tracker
>>>>>>> 16da994 (- files)
			<LogoutButton/>
		</header>
		{children}
		<Advertisement/>
	</div>
}