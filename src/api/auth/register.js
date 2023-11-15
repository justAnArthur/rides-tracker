import { User } from "../../database.js";

export const POST = async (req, res) => {
	try {
		if (req.body.password !== req.body._password) {
			// noinspection ExceptionCaughtLocallyJS
			throw new Error("passwords don't match")
		}

		console.log(req.body)

		await User.create(req.body)

		res.status(200).send()
	} catch (error) {
		res.status(400).send(error.toString())
	}
}