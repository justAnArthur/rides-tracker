import { useEffect } from "react";
import { getCookie, useForm } from "../utils.js";

export default () => {

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

	return <main className="rounded-xl bg-white grid place-content-center">
		<form onSubmit={handleSubmit} className="grid gap-3 max-w-xs">
			<label>
				email
				<input name="email" type="email" onChange={handleChange} required/>
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
			{error && <p className="text-red-500">{error}</p>}
		</form>
	</main>
}

export const asPublic = true
