import { User } from "../../database.js";

export const GET = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	User.findOne({ where: { email: JSON.parse(req.headers['cookie'].split('user=')[1]).email } })
		.then(user => res.status(200).end(JSON.stringify(user)))
		.catch(err => res.status(500).json(JSON.stringify(err)))
}