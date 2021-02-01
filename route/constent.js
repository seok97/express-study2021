const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("constent 이후")
})

router.get("/adddd", (req, res) => {
  res.send("content 이후 url adddd")
})

module.exports = router
