import users from "../../utils/models/user";
import ConnectDB from "../../utils/mongodb";
import bcrypt from "bcrypt";

ConnectDB();

export default async function signin(req, res) {
  const findUser = await users.findOne({ email: req.body.email });
  const IsCorrectingPassword = await bcrypt.compare(
    req.body.password,
    findUser.password
  );
  if (IsCorrectingPassword) {
    const { email, password, createdAt, updatedAt } = findUser;
    return res.status(200).json({ email, password, createdAt, updatedAt });
  }
  return res.json({ status: "error" });
}
