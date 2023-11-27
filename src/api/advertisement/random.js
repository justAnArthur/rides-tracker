import { Advertisement, sequelize } from "../../database.js";
import { authMiddleware } from "../../server/auth.js";

export const GET = (req, res) => {
	Advertisement
		.findOne({ order: sequelize.random() })
		.then(add => res.status(200).end(JSON.stringify(add)))
		.catch(err => res.status(500).json(JSON.stringify(err)))
}

// export default [authMiddleware]
