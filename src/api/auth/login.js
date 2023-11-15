import { User } from "../../database.js";

export const POST = async (req, res) => {
	try {
		const user = await User.findOne({ where: { email: req.body.email } })

		if (!user || !user.validPassword(req.body.password)) {
			// noinspection ExceptionCaughtLocallyJS
			throw new Error("passwords don't match")
		}

		res.status(200).send()
	} catch (error) {
		res.status(400).send(error.toString())
	}
}