const express = require("express")
const router = express.Router()

// 导入用户路由处理函数对应的模块
const user_handle = require("../router_handler/user")

// 注册新用户
router.post("/reguser", user_handle.regUser)

router.post("/login", user_handle.login)

module.exports = router
