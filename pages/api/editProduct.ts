import { NextApiRequest, NextApiResponse } from "next";
import products from "../../utils/models/products";
import ConnectDB from "../../utils/mongodb";
ConnectDB();
export default async function Edit(req: NextApiRequest, res: NextApiResponse) {
  const { id, colors, images, title_fa, data_layer, price } = req.body.product;
  await products.findOneAndUpdate(
    { id },
    {
      title_fa,
      images,
      data_layer,
      price,
      colors,
    },
    {
      returnOriginal: false,
    }
  );
  return res.status(200).json({ success: "updated !" });
}
