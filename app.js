const { request } = require("http")
const express = require("express")
const logger = require("morgan")
const bodyparser = require("body-parser")

const admin = require("./route/admin")
const content = require("./route/constent")

const nunjucks = require("nunjucks")

const app = express()
const port = 3000

nunjucks.configure("template", {
  autoescape: true,
  express: app,
})

// 미들웨어 세팅
app.use(logger("dev"))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.send("hello express")
})

function vipmiddle(req, res, next) {
  console.log("최우선 미들웨어")
  next()
}

app.use("/admin", vipmiddle, admin)
app.use("/content", content)

app.listen(port, () => {
  console.log("express listening on port", port)
})
