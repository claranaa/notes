// 1. 导入fs模块，来操作文件
const fs = require("fs")

// 调用fs.readFile()方法读取文件
fs.readFile("./files/11.txt", "utf8", function (err, dataStr) {
  console.log(err)
  console.log("------")
  console.log(dataStr)
})
