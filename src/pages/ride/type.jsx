import { Form } from "../../components/form.jsx";

export default function Type() {
	return <Form {...{
		apiPath: '/api/ride/type',
		fields: ['name'],
		createFields: ['name'],
		importKeys: ['id', 'name', 'createdAt', 'updatedAt']
	}}/>
}