import type { NextApiRequest, NextApiResponse } from "next"
import Product from "../../../models/Product"
import User from "../../../models/User"

import { dbConnect, dbDisconnect } from "../../../misc/db"
import { data } from "../../../misc/staticData"

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET":
			const data = await getProducts()

			return res
				.status(200)
				.json({ status: 200, message: "products loaded successfully", data })

		default:
			return res.status(400).json({ msg: "This method is not supported", data: {} })
	}
}

const getProducts = async () => {
	await dbConnect()

	await Product.deleteMany()
	await Product.insertMany(data.products)

	await User.deleteMany()
	await User.insertMany(data.users)

	const products = await Product.find()
	const users = await User.find()

	await dbDisconnect()

	return { products, users }
}
