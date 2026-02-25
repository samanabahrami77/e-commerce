import { NextApiRequest, NextApiResponse } from "next";
import users from "../../utils/models/user";
import ConnectDB from "../../utils/mongodb";
import bcrypt from "bcrypt";

export default async function signin(req: NextApiRequest, res: NextApiResponse) {
  await ConnectDB();
  const findUser = await users.findOne({ email: req.body.email });
  if (findUser && findUser.password) {
    const IsCorrectingPassword = await bcrypt.compare(
      req.body.password,
      findUser.password
    );
    if (IsCorrectingPassword) {
      const { email, password, createdAt, updatedAt, role } = findUser.toObject();
      return res.status(200).json({
        email,
        password,
        createdAt,
        updatedAt,
        role,
      });
    }
  }
  return res.json({ status: "error" });
}
