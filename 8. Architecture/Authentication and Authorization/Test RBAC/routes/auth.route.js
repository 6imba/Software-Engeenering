const router = require("express").Router();
const User = require('../models/user.model');

router.get("/login", async (req, res) => {
    res.render("login")
})

router.post("/login", async (req, res) => {
    res.send("App Auth Route (Login POST)!")
})

router.get("/register", async (req, res) => {
    req.flash('error', 'some error1')
    req.flash('error', 'some error2')
    req.flash('info', 'some info1')
    req.flash('info', 'some info2')
    req.flash('key', 'some value')
    const messages = req.flash()
    console.log(messages)
    res.render("register", {messages})
})

router.post("/register", async (req, res, next) => {
    try {
        const { email } = req.body
        const doesExist = await User.findOne({email})
        if(doesExist){
            res.redirect('/auth/register')
            return;
        }
        const user = new User(req.body)
        await user.save();
        res.send(user)
    } catch (error) {
        next(error)
    }
})

router.get("/logout", async (req, res) => {
    res.send("App Auth Route (Logout GET)!")
})


module.exports = router;
