import { useState } from "react";

export function getCookie(name) {
	return document.cookie
		.split("; ")
		.find((row) => row.startsWith(name + "="))
		?.split("=")[1];
}

export function useForm({ onSubmit }) {
	const [formState, setFormState] = useState({})
	const [error, setError] = useState(null)

	console.log(formState)

	function handleChange(event) {
		const { name, value } = event.target
		setFormState(formState =>
			({
				...formState,
				[name]: value
			})
		)
	}

	function handleSubmit(event) {
		event.preventDefault()
		const result = onSubmit(formState)

		if (result instanceof Promise)
			result.catch(error => setError(error.toString()))
	}

	return { formState, error, handleChange, handleSubmit }
}