// 1. 引入fs模块
const fs = require("fs")

// 2. 调用方法
/* fs.readFile("./resources/为学.md", (err, data) => {
  // 如果失败，则抛出错误
  if (err) throw err
  // 如果没有出错，则输出内容
  console.log(data.toString())
}) */

// 3. 使用promise封装
const p = new Promise(function (resolve, reject) {
  fs.readFile("./resources/为学.mda", (err, data) => {
    // 如果失败，则抛出错误
    if (err) reject(err)
    // 如果没有出错，则输出内容
    resolve(data)
  })
})

p.then(
  function (value) {
    console.log(value.toString())
  },
  function (reason) {
    console.log("读取文件失败！！")
  }
)
