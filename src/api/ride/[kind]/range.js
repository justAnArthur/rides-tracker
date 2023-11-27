import { RideKm, RideTime, RideUsage, Type, User } from "../../../database.js";
import { Op } from "sequelize";

const kinds = {
	km: RideKm,
	time: RideTime,
	usage: RideUsage,
	type: Type
}

export const POST = (req, res) => {
	const kind = kinds[req.params.kind]

	if (!kind)
		return res.status(404).end()

	res.setHeader('Content-Type', 'application/json');
	User.findOne({ where: { email: JSON.parse(req.headers['cookie'].split('user=')[1]).email } })
		.then(user => kind.findAll({ where: { userId: user.id, createdAt: { [Op.between]: [new Date(req.body.dateFrom), new Date(req.body.dateTo)] } } }))
		.then(rides => res.status(200).end(JSON.stringify(rides)))
		.catch(err => res.status(500).json(JSON.stringify(err)))
}