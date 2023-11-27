import { Form } from "../components/form.jsx";

export default function Advertisement() {
	return <Form {...{
		apiPath: '/api/advertisement/manage',
		fields: ['name', 'link', 'image', 'counter'],
		createFields: ['name', 'link', 'image'],
		importKeys: ['id', 'name', 'link', 'image', 'counter', 'createdAt', 'updatedAt']
	}}/>
}