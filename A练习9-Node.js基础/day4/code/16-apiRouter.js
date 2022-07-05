const express = require("express")
const router = express.Router()

// 挂载对应的路由
router.get("/get", (req, res) => {
  const query = req.query
  // 调用req.send()方法，向客户端响应处理的结果
  res.send({
    status: 0,
    msg: "GET请求成功！",
    data: query
  })
})

router.post("/post", (req, res) => {
  const body = req.body
  res.send({
    status: 0,
    msg: "POST请求成功",
    data: body
  })
})

// 定义DELETE接口
router.detele = ("./delete",
(req, res) => {
  res.send({
    status: 0,
    msg: "DELETE请求成功"
  })
})

module.exports = router
