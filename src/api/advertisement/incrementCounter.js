import { Advertisement } from "../../database.js";
import { authMiddleware } from "../../server/auth.js";

export const POST = (req, res) => {
	Advertisement.increment({ counter: 1 }, { where: { id: req.body.id } })
		.then(add => res.status(200).end(JSON.stringify(add)))
		.catch(err => res.status(500).end(JSON.stringify(err)))
}

export default [authMiddleware]