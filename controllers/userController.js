const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//@desc register user
//@route POST /api/user/register
//@access public

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

//@desc login user
//@route POST /api/user/login
//@access public

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    res.status(400);
    throw new Error('please enter all fields');
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '10m',
      }
    );
    res.status(200).json({ accessToken });
  }else{
    res.status(400);
    throw new Error('invalid credentials');
  }
});

//@desc login user
//@route GET /api/user/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = { userRegister, userLogin, currentUser };
