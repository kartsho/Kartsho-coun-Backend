const Admin = require("../model/Admin");
const generateToken = require("../utils/generateToken");
const User = require('../model/User');
const College = require("../model/college");

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email, password });

    if (!admin) {
      res.status(404).json({ message: " Admin not Found" });
    }

    return res.status(200).json({
      message: "Login Successful"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUser = async (req, res) => {
  try{
  const users = await User.find({}, {password: 0});
  if(!users){
    res.status(404).json({message: "user not found" })
  }
  return res.status(200).json(users);
} catch(error) {
  res.status(500).json({message : error.message})
}
}


module.exports = {
  adminLogin,
  getAllUser,
};
