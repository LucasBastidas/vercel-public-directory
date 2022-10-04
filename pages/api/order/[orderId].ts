import { NextApiRequest, NextApiResponse } from "next";
const methods = require("micro-method-router");

export default methods({
	async post(req: NextApiRequest, res: NextApiResponse) {
		const orderId = req.query.orderId;
		res.status(200).send("?productId=" + orderId);
	},
});
