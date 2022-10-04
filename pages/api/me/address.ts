import { NextApiRequest, NextApiResponse } from "next";
const methods = require("micro-method-router");

export default methods({
	async patch(req: NextApiRequest, res: NextApiResponse) {
		res.status(200).send("PATCH ADDRESS");
	},
});
