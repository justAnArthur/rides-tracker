import { Form } from "../components/form.jsx";

export default function Advertisement() {
	return <Form {...{
		apiPath: '/api/user/manage',
		fields: ['email', 'name', 'age', 'admin'],
		createFields: ['email', 'name', 'age', 'password'],
		importKeys: ['id', 'email', 'name', 'password', 'age', 'admin', 'createdAt', 'updatedAt']
	}}/>
}