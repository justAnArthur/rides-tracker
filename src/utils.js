import { useEffect, useState } from "react";

export function getCookie(name) {
	return document.cookie
		.split("; ")
		.find((row) => row.startsWith(name + "="))
		?.split("=")[1];
}

export function useForm({ onSubmit }) {
	const [formState, setFormState] = useState({})
	const [error, setError] = useState(null)

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
		const result = onSubmit(formState, setFormState)

		if (result instanceof Promise)
			result.catch(error => setError(error.toString()))
	}

	return { formState, error, handleChange, handleSubmit }
}

export function useData(url, options) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		setLoading(true)
		fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			...options,
		})
			.then(async res => {
				if (res.status !== 200)
					throw new Error(await res.text())

				return res.json()
			})
			.then(setData)
			.catch(setError)
			.finally(() => setLoading(false))
	}, [url, JSON.stringify(options)])

	return { data, _setData: setData, loading, error }
}