import { User } from "../../database.js";

export const POST = async (req, res) => {
	try {
		const user = await User.findOne({ where: { email: req.body.email } })

<<<<<<< HEAD
		if (!user)
			throw new Error("user don't exist")

		if (!user.validPassword(req.body.password))
			throw new Error("passwords don't match")
=======
		if (!user || !user.validPassword(req.body.password)) {
			// noinspection ExceptionCaughtLocallyJS
			throw new Error("passwords don't match")
		}
>>>>>>> 16da994 (- files)

		res.status(200).end()
	} catch (error) {
		res.status(400).end(error.toString())
	}
}