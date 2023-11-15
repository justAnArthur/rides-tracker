import { useEffect, useState } from "react";
import { getCookie } from "./utils.js";

export const ProtectedLayout = ({ children }) => {

	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const userFromCookie = getCookie('user')
		setUser(userFromCookie)
		setLoading(false)

		if (!userFromCookie)
			window.location.href = '/login'
	}, [])

	if (loading)
		return <p>Loading...</p>

	if (!user)
		return null

	return children
}