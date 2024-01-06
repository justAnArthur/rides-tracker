import { Advertisement, sequelize } from "../../database.js";
<<<<<<< HEAD
import { authMiddleware } from "../../server/auth.js";
=======
>>>>>>> 16da994 (- files)

export const GET = (req, res) => {
	Advertisement
		.findOne({ order: sequelize.random() })
		.then(add => res.status(200).end(JSON.stringify(add)))
		.catch(err => res.status(500).json(JSON.stringify(err)))
<<<<<<< HEAD
}

// export default [authMiddleware]
=======
}
>>>>>>> 16da994 (- files)
