import { User } from "../../database.js";

export const POST = async (req, res) => {
	try {
		if (req.body.password !== req.body._password) {
			// noinspection ExceptionCaughtLocallyJS
			throw new Error("passwords don't match")
		}

		await User.create(req.body)

		res.status(200).end()
	} catch (error) {
		res.status(400).end(error.toString())
	}
}