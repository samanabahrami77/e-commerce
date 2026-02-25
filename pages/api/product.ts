import { NextApiRequest, NextApiResponse } from "next";
import products from "../../utils/models/products";
import ConnectDB from "../../utils/mongodb";

export default async function getProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    await ConnectDB();
    const product = await products.find({});
    if (product) {
      return res.status(200).json({ product });
    }
    return res.json({ status: "error" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
