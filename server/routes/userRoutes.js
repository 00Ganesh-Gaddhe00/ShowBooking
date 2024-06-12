const express = require("express")
const bcrypt = require("bcrypt")

const User = require("../models/usermodel")
const router = express.Router();


//register
router.post("/register", async (req, res) => {
  try {

    const userExist = await User.findOne({ email: req.body.email })
    if (userExist) {
      res.send({
        success: false,
        message: "user already exist"
      })
      return;
    }

    // password hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    const newUser = await User(req.body);
    await newUser.save();

    res.send({
      success: true,
      message: "User Registered Successfully"
    }

    );

  }
  catch (err) {
    console.log(err)
  }
})

router.post("/login", async (req, res) => {
  try {

    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      res.send({
        success: false,
        message: "email not found, please Register"
      })
      return;
    }
   
    const validpassword = await bcrypt.compare(req.body.password, user.password)

    if(!validpassword){
      res.send({
        success:false,
        message:"Invalid Password"
      })
      return;
    }

    res.send({
      success:true,
      message:"login successful"
    })

  }
  catch (err) {
    console.log(err)
  }
})


module.exports = router;