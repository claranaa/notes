const express = require("express")
const app = express()

// 1. 导入路由模块
const router = require("./03-router")
// 2. 注册路由模块
app.use("/api", router)

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1")
})
