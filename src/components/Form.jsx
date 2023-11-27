import { useData, useForm } from "../utils.js";
import { useMemo, useState } from "react";

const Import = ({ apiPath, keys }) => {

	const [result, setResult] = useState(null)

	const handleFileRead = (event) => {
		const reader = new FileReader()

		reader.onloadend = (evt) => {
			if (evt.target.readyState === FileReader.DONE) {
				const lines = evt.target.result.split('\n').map(line => line.split(','))

				const _keys = lines[0]

				const data = lines.slice(1)

				if (_keys.every(item => keys.includes(item)) && keys.every(item => _keys.includes(item))) {
					Promise.all(data.map(values =>
						fetch(apiPath, {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify(_keys.reduce((prev, current, index) => ({ ...prev, [current]: values[index] }), {}))
						})))
						.then(() => location.reload())
				} else
					setResult('csv file dont related to schema')
			}
		}

		reader.readAsText(event.target.files[0])
	}

	return <div>
		<label>
			import file
			<input type="file" name="file" accept=".csv" onChange={handleFileRead}/>
		</label>
		{result}
	</div>
}

function convertToCsv(keys, records) {
	const csvRecords = [keys, ...records.map(record => keys.map(key => record[key]))]

	return csvRecords.map(it => it.join(",")).join("\n")
}

export const Export = ({ data }) => {
	const exportUrl = useMemo(() => {
		if(!data || !Array.isArray(data))
			return

		const csv = convertToCsv(Object.keys(data[0]), data)
		const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
		return URL.createObjectURL(blob)
	}, [data?.length])

	return <span>
		{exportUrl && <a href={exportUrl} download="export.csv">
			export
		</a>}
	</span>
}

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
		{error && <p>{error}</p>}
	</form>
}

export const Form = ({ apiPath, fields, createFields, importKeys }) => {
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
		{createFields &&
			<Create {...{ apiPath, fields: createFields, onSubmitData }}/>}

		{data?.length > 0 &&
			<Export {...{ data }}/>}

		{importKeys &&
			<Import {...{ apiPath, keys: importKeys }} />}

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