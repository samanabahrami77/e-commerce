import { NextApiRequest, NextApiResponse } from "next";
import products from "../../utils/models/products";
import ConnectDB from "../../utils/mongodb";
ConnectDB();
export default async function Delete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;
  await products.deleteOne({ id });
  return res.status(200).json({ success: "deleted !" });
}
