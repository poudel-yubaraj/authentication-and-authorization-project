const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const SALT_ROUND = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All field are mandatory" });
    }
    // const existingEmail = await userModel.findOne({ email });
    // const exsitingUsername = await userModel.findOne({ username });
    const [existingEmail, exsitingUsername] = await Promise.all([
      userModel.findOne({ email }),
      userModel.findOne({ username }),
    ]);

    if (existingEmail) {
      return res.status(409).json({ message: "email already exist" });
    }

    if (exsitingUsername) {
      return res.status(409).json({ message: "username already exist" });
    }

    const hashPassword = await bcrypt.hash(password, SALT_ROUND);
    console.log(username);
    const userData = new userModel({
      username,
      email,
      password: hashPassword,
    });

    await userData.save();
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All field are mandatory" });
    }
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(409).json({ message: "User do not exist" });
    }
    const registeredPassword = user.password;
    const passwordCheck = await bcrypt.compare(password, registeredPassword);
    if (!passwordCheck) {
      return res.status(400).json({ message: "Password don't match" });
    }

    const jwtToken = jwt.sign({ username, _id:user._id, email:user.email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    console.log(process.env.JWT_SECRET_KEY);
    res.status(200).json({
      message: "Successfully logged in",
      success: true,
      jwt: jwtToken,
      username,
    });
    
  } catch (error) {
    console.error("login error");
    res.status(400).josn({ message: "Internal server error" });
  }
};

module.exports = { signUp, logIn };
