import { NextApiRequest, NextApiResponse } from "next";
const methods = require("micro-method-router");

export default methods({
	async post(req: NextApiRequest, res: NextApiResponse) {
		res.status(200).send("MERCADO PAGO");
	},
});
