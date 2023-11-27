import { useEffect } from "react";
import { getCookie, useForm } from "../utils.js";

export default function Login() {
	const { handleChange, error, handleSubmit } = useForm({ onSubmit })

	useEffect(() => {
		if (getCookie('user'))
			window.location.href = '/'
	}, [])

	function onSubmit(data) {
		return fetch('/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
			.then(async res => {
				if (res.status !== 200)
					throw new Error(await res.text())

				document.cookie = `user=${JSON.stringify({ email: data.email, password: data.password })}; path=/`
				window.location.href = '/'
			})
	}

	return <main>
		<form onSubmit={handleSubmit}>
			<label>
				email
				{/*type="email "这个该死的 "admin "怎么会是电子邮件？*/}
				<input name="email" type="text" onChange={handleChange} required/>
			</label>
			<label>
				password
				<input name="password" type="password" onChange={handleChange} required/>
			</label>
			<button type="submit">login</button>
			{error && <p>{error}</p>}
		</form>
	</main>
}


export const asPublic = true