
import { NextApiRequest, NextApiResponse } from "next";
import User, { IUser } from "../../../utils/models/user";
import ConnectDB from "../../../utils/mongodb";
import bcrypt from "bcrypt";

ConnectDB();

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(401)
      .json({ status: "error", error: "Please enter all fields" });
  }

  try {
    const user: IUser | null = await User.findOne({ email });

    if (user && user.password && (await bcrypt.compare(password, user.password))) {
      const userData: Partial<IUser> = { ...user.toObject() };
      delete userData.password;
      return res.status(200).json({ status: "success", data: userData });
    } else {
      return res
        .status(401)
        .json({ status: "error", error: "email or password is not correct" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
}
