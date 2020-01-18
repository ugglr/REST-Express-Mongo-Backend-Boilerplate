const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// GET USER BY EMAIL
router.get("/getUserByEmail", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User does not exist");

  return res.status(200).send({ _id: user._id, email: user.email });
});

// REGISTER
router.post("/register", async (req, res) => {
  console.log("req", req.body);
  // Check if user exists in db
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // create new user
  const user = new User({
    email: req.body.email,
    password: hashedPassword
  });
  // save user to db
  await user
    .save()
    .then(() => res.status(200).send({ user: user._id }))
    .catch(err => res.status(400).send(err));
});

// LOGIN
router.post("/login", async (req, res) => {
  // check if user exists in db
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is wrong");
  // PASSWORD IS CORRECT?
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("invalid password");

  // Create and assign Token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
