import { getCookie } from "../utils.js";
import { Advertisement } from "../components/Advertisement.jsx";

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

export default function Layout({ children }) {
	return <div>
		<header>
			react-rides-tracker{' '}
			<LogoutButton/>
		</header>
		{children}
		<Advertisement/>
	</div>
}