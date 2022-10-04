import { NextApiRequest, NextApiResponse } from "next";
const methods = require("micro-method-router");

export default methods({
	async get(req: NextApiRequest, res: NextApiResponse) {
		res.status(200).json(req.query);
	},
});
