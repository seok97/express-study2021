const { request } = require("http")
const express = require("express")

const admin = require("./route/admin")
const content = require("./route/constent")

const nunjucks = require("nunjucks")

const app = express()
const port = 3000

nunjucks.configure("template", {
  autoescape: true,
  express: app,
})

app.get("/", (req, res) => {
  res.send("hello express")
})

app.use("/admin", admin)
app.use("/content", content)

app.listen(port, () => {
  console.log("express listening on port", port)
})
