import { getCookie, useData } from "../utils.js";
import { useEffect, useState } from "react";

export const Advertisement = () => {
	const { data, loading } = useData(getCookie('user') && '/api/user/me')

	const [advertisement, setAdvertisement] = useState(null)

	useEffect(() => {
		if (data && !data.admin)
			setTimeOut()
	}, [loading])

	function setTimeOut() {
		setTimeout(() => {
			fetch('/api/advertisement/random')
				.then(res => {
					if (res.status === 200)
						return res.json()
				})
				.then(data => {
					if (!data)
						return

					setAdvertisement(data)
				})
		}, 1000 * 60)
	}

	function incrementCount() {
		fetch('/api/advertisement/incrementCounter', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: data.id })
		}).then(res => {
			if (res.status !== 200)
				return

			setAdvertisement(null)
			setTimeOut()
		})
	}

	function handleOnClick() {
		setAdvertisement(null)
		setTimeOut()
	}

	if (advertisement)
		return <aside>
			<div>
				<div>
					<a href={advertisement.link} rel="noreferrer" target="_blank" onClick={incrementCount}>
						{advertisement.name}
					</a>
					<button type="button" onClick={handleOnClick}>
						❌
					</button>
				</div>
				<img src={advertisement.image} alt={advertisement.name}/>
			</div>
		</aside>
}