import { NextApiRequest, NextApiResponse } from "next";
const methods = require("micro-method-router");

export default methods({
	async get(req: NextApiRequest, res: NextApiResponse) {
		const productId = req.query.productId;
		res.status(200).send("productID: " + productId);
	},
});
