import { Advertisement } from "../../database.js";
import { adminMiddleware } from "../../server/auth.js";

export const GET = (req, res) => {
	Advertisement
		.findAll()
		.then(add => res.status(200).end(JSON.stringify(add)))
		.catch(err => res.status(500).json(JSON.stringify(err)))
}

export const POST = (req, res) => {
	Advertisement.create(req.body)
		.then(add => res.status(200).end(JSON.stringify(add)))
		.catch(err => res.status(500).end(JSON.stringify(err)))
}

export const DELETE = (req, res) => {
	Advertisement.destroy({ where: { id: req.body.id } })
		.then(() => res.status(200).end())
		.catch(err => res.status(500).end(JSON.stringify(err)))
}

export default [adminMiddleware]