const express = require("express")
const router = express.Router()

function testmiddlew(req, res, next) {
  console.log("첫번째 미들웨어")
  next()
}

function testmiddlew2(req, res, next) {
  console.log("두번째 미들웨어")
  next()
}

router.get("/", testmiddlew, testmiddlew2, (req, res) => {
  res.send("admin 이후 url")
})

router.get("/products", (req, res) => {
  // res.send("admin 이후 url products")
  res.render("admin/products.html", {
    message: "<h1>태그가 출력된다</h1>",
  })
})

router.get("/products/write", (req, res) => {
  res.render("admin/write.html")
})

router.post("/products/write", (req, res) => {
  res.send(req.body)
})

module.exports = router
