import { User } from "../database.js";
import { authMiddleware } from "../server/auth.js";

export const GET = async (req, res) => {
	res.status(200).send(await User.findAll())
}

export default [authMiddleware]