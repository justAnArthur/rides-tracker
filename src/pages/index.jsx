import { useEffect, useState } from "react"

export default () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch('/api')
			.then(res => res.text())
			.then(setData);
	}, [])

	if (!data)
		return 'loading'

	return data
}