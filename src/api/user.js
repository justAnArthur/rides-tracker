import { User } from "../database.js";
import { authMiddleware } from "../server/auth.js";

export const GET = async (req, res) => {
	res.status(200).json(await User.findAll())
}

export default [authMiddleware]