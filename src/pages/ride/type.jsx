import { Form } from "../../components/form.jsx";

<<<<<<< HEAD
export default function Type() {
=======
export default function Type () {
>>>>>>> 16da994 (- files)
	return <Form {...{
		apiPath: '/api/ride/type',
		fields: ['name'],
		createFields: ['name'],
<<<<<<< HEAD
		importKeys: ['id', 'name', 'createdAt', 'updatedAt']
=======
>>>>>>> 16da994 (- files)
	}}/>
}