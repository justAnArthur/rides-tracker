import { useEffect } from "react";
import { getCookie, useForm } from "../utils.js";

<<<<<<< HEAD
export default function Register() {
=======
export default () => {

>>>>>>> 16da994 (- files)
	const { handleChange, error, handleSubmit } = useForm({ onSubmit })

	useEffect(() => {
		if (getCookie('user'))
			window.location.href = '/'
	}, [])

	function onSubmit(data) {
		return fetch('/api/auth/register', {
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
				<input name="email" type="text" onChange={handleChange} required/>
			</label>
			<label>
				name
				<input name="name" type="text" onChange={handleChange} required/>
			</label>
			<label>
				age
				<input name="age" type="number" onChange={handleChange}/>
			</label>
			<label>
				password
				<input name="password" type="password" onChange={handleChange} required/>
			</label>
			<label>
				password repeat
				<input name="_password" type="password" onChange={handleChange} required/>
			</label>
			<button type="submit">register</button>
<<<<<<< HEAD
			{error && <p>{error}</p>}
=======
			{error && <p className="text-red-500">{error}</p>}
>>>>>>> 16da994 (- files)
		</form>
	</main>
}

export const asPublic = true
