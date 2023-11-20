import { Form } from "../../components/form.jsx";
import { useData } from "../../utils.js";
import { createContext, useContext } from "react";

const TypesContext = createContext([])

const useTypesContext = () => useContext(TypesContext)

const TypeProvider = ({ children }) => {
	const { data, loading } = useData('/api/ride/type')

	if (loading)
		return 'loading...'

	return <TypesContext.Provider value={data || []}>
		{children}
	</TypesContext.Provider>
}

const TypeInput = ({ onChange }) => {
	const data = useTypesContext()

	return <label>
		typeId
		<select name="typeId" onChange={onChange} defaultValue="" required>
			<option value="" disabled hidden>
				choose
			</option>
			{data?.map(({ name, id }) =>
				<option key={id} value={id}>{name}</option>
			)}
		</select>
	</label>
}

const TypeLabel = ({ value }) => {
	const data = useTypesContext()

	return data?.find(({ id }) => id === value)?.name
}

TypeLabel.originalName = 'typeId'

export default function Ride({ param }) {

	return <TypeProvider>
		<Form {...{
			apiPath: `/api/ride/${param}`,
			fields: ['createdAt', 'value', TypeLabel],
			createFields: ['value', TypeInput],
		}}/>
	</TypeProvider>
}

export const pathParams = ['km', 'time', 'usage']