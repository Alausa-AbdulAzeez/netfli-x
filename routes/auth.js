const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER ACCOUNT
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
    isAdmin: req.body.isAdmin,
  });
  try {
    const user = await newUser.save();
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN 1
// router.get("/login", async (req, res) => {
//   const currentUser = new User({
//     email: req.body.email,
//     password: CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.SECRET_KEY
//     ).toString(),
//   });
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     const d1 = await CryptoJS.AES.decrypt(
//       currentUser.password,
//       process.env.SECRET_KEY
//     ).toString(CryptoJS.enc.Utf8);

//     if (user) {
//       const d2 = await CryptoJS.AES.decrypt(
//         user.password,
//         process.env.SECRET_KEY
//       ).toString(CryptoJS.enc.Utf8);
//       if (d1 === d2) {
//         res.status(200).json("Login successful");
//       } else {
//         res.status(401).json("Password incorrect");
//       }
//     } else {
//       res.status(404).json("No such user");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Incorrect username or password!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Incorrect username or password!");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "50d" }
    );
    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
