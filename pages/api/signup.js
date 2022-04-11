import ConnectDB from "../../utils/mongodb";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookies from "cookies";
import user from "../../utils/models/user";

ConnectDB();

export default async function signup(req, res) {
  const { email, password } = req.body;

  const findUser = await user.findOne({ email });
  if (!findUser) {
    const newUser = new user({
      email,
      password: await bcrypt.hash(password, 12),
    });

    await newUser.save();
    return res.json({ success: "loged in !" });
  } else return res.json({ error: "user is exist !" });
}
