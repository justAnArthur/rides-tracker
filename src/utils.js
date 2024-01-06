<<<<<<< HEAD
import { useEffect, useState } from "react"
=======
import { useEffect, useState } from "react";
>>>>>>> 16da994 (- files)

export function getCookie(name) {
	return document.cookie
		.split("; ")
		.find((row) => row.startsWith(name + "="))
<<<<<<< HEAD
		?.split("=")[1]
}

export function useForm({ onSubmit, defaultValues }) {
	const [formState, setFormState] = useState(defaultValues || {})
=======
		?.split("=")[1];
}

export function useForm({ onSubmit }) {
	const [formState, setFormState] = useState({})
>>>>>>> 16da994 (- files)
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
<<<<<<< HEAD
		url && fetch(url, {
=======
		fetch(url, {
>>>>>>> 16da994 (- files)
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
<<<<<<< HEAD
}

export function formatDate(date) {
	let d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear()

	if (month.length < 2)
		month = '0' + month
	if (day.length < 2)
		day = '0' + day

	return [year, month, day].join('-')
}

export function generateDateRange(startDate, endDate) {
	let start = new Date(startDate)
	let end = new Date(endDate)
	let datesArray = []

	while (start <= end) {
		datesArray.push(formatDate(start))
		start.setDate(start.getDate() + 1)
	}

	return datesArray
=======
>>>>>>> 16da994 (- files)
}