import { useEffect } from "react";
import { getCookie, useForm } from "../utils.js";

<<<<<<< HEAD
export default function Login() {
=======
export default () => {

>>>>>>> 16da994 (- files)
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

<<<<<<< HEAD
	return <main>
		<form onSubmit={handleSubmit}>
=======
	return <main className="rounded-xl bg-white grid place-content-center">
		<form onSubmit={handleSubmit} className="grid gap-3 max-w-xs">
>>>>>>> 16da994 (- files)
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
<<<<<<< HEAD
			{error && <p>{error}</p>}
=======
			{error && <p className="text-red-500">{error}</p>}
>>>>>>> 16da994 (- files)
		</form>
	</main>
}


export const asPublic = true