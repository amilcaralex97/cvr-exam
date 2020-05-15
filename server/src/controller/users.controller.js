const userController = {};

const User = require("../models/User");

userController.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userController.createUser = async (req, res) => {
  const { username, password, isAdmin } = req.body;
  const newUser = new User({
    username,
    password,
    isAdmin,
  });
  await newUser.save();
  res.json({ message: "Create users" });
};

userController.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "user Deleted" });
};

userController.updateUser = async (req, res) => {
  const { username, password, isAdmin } = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    username,
    password,
    isAdmin,
  });
  res.json({ message: "UPDATE user" });
};

userController.validateLogin = async (req, res) => {
  const result = await User.find();
  console.log(result);
};

module.exports = userController;
