const router = require("express").Router();

router.get("/dashboard", (req, res) => {
    res.send("App User Route (Admin Dashboard GET)")
})

router.get("/profile", (req, res) => {
    res.send("App User Route (User Profile GET)")
})

module.exports = router;
