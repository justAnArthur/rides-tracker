import { User } from "../database.js";

export async function authMiddleware(req, res, next) {
	try {
		const user = JSON.parse(req.headers['cookie'].split('user=')[1])

		const userDatabase = await User.findOne({ where: { email: user.email } })

		if (!userDatabase || !userDatabase.validPassword(user.password)) {
			res.status(401).send("unauthorized")
			return
		}

		next()
	} catch (error) {
		console.warn(error)
		res.status(401).send("unauthorized")
	}
}

export async function adminMiddleware(req, res, next) {
	try {
		const user = JSON.parse(req.headers['cookie'].split('user=')[1])

		const userDatabase = await User.findOne({ where: { email: user.email } })

		if (!userDatabase || !userDatabase.validPassword(user.password) || !userDatabase.admin) {
			res.status(401).send("unauthorized")
			return
		}

		next()
	} catch (error) {
		console.warn(error)
		res.status(401).send("unauthorized")
	}
}