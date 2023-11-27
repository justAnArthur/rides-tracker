import { authMiddleware } from "../../../server/auth.js";
import { RideKm, RideTime, RideUsage, Type, User } from "../../../database.js";

const kinds = {
	km: RideKm,
	time: RideTime,
	usage: RideUsage,
	type: Type
}

export const GET = (req, res) => {
	const kind = kinds[req.params.kind]

	if (!kind)
		return res.status(404).end()

	res.setHeader('Content-Type', 'application/json');
	User.findOne({ where: { email: JSON.parse(req.headers['cookie'].split('user=')[1]).email } })
		.then(user => kind.findAll({ where: { userId: user.id } }))
		.then(rides => res.status(200).end(JSON.stringify(rides)))
		.catch(err => res.status(500).json(JSON.stringify(err)))
}

export const POST = (req, res) => {
	const kind = kinds[req.params.kind]

	if (!kind)
		return res.status(404).end()

	res.setHeader('Content-Type', 'application/json');
	User.findOne({ where: { email: JSON.parse(req.headers['cookie'].split('user=')[1]).email } })
		.then(user => kind.create({ ...req.body, userId: user.id }))
		.then(ride => res.status(200).end(JSON.stringify(ride)))
		.catch(err => res.status(500).end(JSON.stringify(err)))
}

export const DELETE = (req, res) => {
	const kind = kinds[req.params.kind]

	if (!kind)
		return res.status(404).end()

	User.findOne({ where: { email: JSON.parse(req.headers['cookie'].split('user=')[1]).email } })
		.then(user => kind.destroy({ where: { id: req.body.id, userId: user.id } }))
		.then(() => res.status(200).end())
		.catch(err => res.status(500).end(JSON.stringify(err)))
}

export default [authMiddleware]