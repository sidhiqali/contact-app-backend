const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const userRegister = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('please enter all fields');
  }
  const availUser = await User.findOne({ email });
  if (availUser) {
    res.status(400);
    throw new Error('user already exists');
  }

  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });
  if (user) {
    console.log(user);
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error('user not available');
  }
});

const userLogin = asyncHandler(async (req, res) => {
  res.status(200).json('Login');
});

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json('current User');
});

module.exports = { userRegister, userLogin, currentUser };
