import { User } from "../../database.js";

export const POST = async (req, res) => {
	try {
		if (req.body.password !== req.body._password) {
			// noinspection ExceptionCaughtLocallyJS
			throw new Error("passwords don't match")
		}

<<<<<<< HEAD
		await User.create(req.body)
=======
		await User.create({ ...req.body, admin: false })
>>>>>>> 16da994 (- files)

		res.status(200).end()
	} catch (error) {
		res.status(400).end(error.toString())
	}
}