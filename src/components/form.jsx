import { useData, useForm } from "../utils.js";
import { useMemo } from "react";

const Create = ({ apiPath, fields, onSubmitData }) => {
	const { handleChange, error, handleSubmit } = useForm({ onSubmit })

	function onSubmit(data) {
		return fetch(apiPath, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
			.then(async res => {
				if (res.status !== 200)
					throw new Error(await res.text())

				onSubmitData(await res.json())
			})
	}

	const domFields = useMemo(() => {
		return fields.map((Field, i) => (
			typeof Field === 'string'
				? <label key={i}>
					{Field}
					<input name={Field} type="text" onChange={handleChange} required/>
				</label>
				: <Field key={i} onChange={handleChange}/>
		))
	}, [fields.length])

	return <form onSubmit={handleSubmit}>
		{domFields}
		<button type="submit">submit</button>
		{error && <p className="text-red-500">{error}</p>}
	</form>
}

export const Form = ({ apiPath, fields, createFields }) => {
	const { data, loading, error, _setData } = useData(apiPath)

	if (loading)
		return 'loading...'

	if (error)
		return <p>{error.toString()}</p>

	function onSubmitData(data) {
		_setData(prev => [...prev, data])
	}

	function onDelete(id) {
		fetch(apiPath, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id })
		})
			.then(res => {
				if (res.status === 200)
					_setData(prev => prev.filter(({ id: _id }) => _id !== id))
			})
	}

	return <section>
		<Create {...{ apiPath, fields: createFields, onSubmitData }}/>
		<table>
			<thead>
			<tr>
				{fields.map((field, i) => (
					<th key={i}>{
						typeof field === 'string'
							? field
							: field.originalName
					}</th>
				))}
			</tr>
			</thead>
			<tbody>
			{data.map((type, i) => (
				<tr key={`${apiPath}.${i}`}>
					{fields.map((Field, _i) => (
						<td key={`${apiPath}.${i}.${_i}`}>{
							typeof Field === 'string'
								? type[Field]
								: <Field value={type[Field.originalName]}/>
						}</td>
					))}
					<td>
						<button type="button" onClick={() => onDelete(type.id)}>
							❌
						</button>
					</td>
				</tr>
			))}
			</tbody>
		</table>
	</section>
}