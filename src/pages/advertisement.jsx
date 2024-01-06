import { Form } from "../components/form.jsx";

export default function Advertisement() {
	return <Form {...{
<<<<<<< HEAD
		apiPath: '/api/advertisement/manage',
		fields: ['name', 'link', 'image', 'counter'],
		createFields: ['name', 'link', 'image'],
		importKeys: ['id', 'name', 'link', 'image', 'counter', 'createdAt', 'updatedAt']
=======
		apiPath: '/api/advertisement',
		fields: ['name', 'link', 'image'],
		createFields: ['name', 'link', 'image'],
>>>>>>> 16da994 (- files)
	}}/>
}