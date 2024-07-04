import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//logout a user
export const Logout = async (req,res) =>{
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        msg:"User logged out successfully",
        success:true
    })
}

//Login a user
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        msg: "Fill Email and Password fields",
        success: false,
      });
    }
    const nomatch = await User.findOne({ email });
    if (!nomatch) {
      return res
        .status(400)
        .json({ msg: "Invalid Email or Password", success: false });
    }

    const ismatch = await bcrypt.compare(password, nomatch.password);
    if (!ismatch) {
      return res
        .status(400)
        .json({ msg: "Invalid Email or Password", success: false });
    }


    //token and stuff😯
    const tokendata = {
        id: nomatch._id
      };
      
      const token = await jwt.sign(tokendata, "bfhvjedlawfsdnmbfhjdygfjhdsb", { expiresIn: "1d" });
      
      // Set the cookie with the token
      res.cookie("token", token, {
        httpOnly: true,
      });
      
      // Send the JSON response
      return res.status(200).json({
        msg: `Welcome Back ${nomatch.name}`, // Ensure nomatch.name exists and is correct
        nomatch,
        success: true
      });
      
  } catch (error) {
    console.log(error);
  }
};

//Register a new user
export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ msg: "Please enter all fields", success: false });
    }
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res
        .status(400)
        .json({ msg: "User already exists", success: false });
    }
    const hashedpassword = await bcrypt.hash(password, 16);

    await User.create({
      name,
      email,
      password: hashedpassword,
    });
    res.status(201).json({ msg: "Account created successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};
