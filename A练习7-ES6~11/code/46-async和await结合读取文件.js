// 1. 引入fs模块
const fs = require("fs")
// 读取第一个文件
function readWeiXue () {
  return new Promise((resolve, reject) => {
    fs.readFile("./resources/为学.md", (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function readChaYangShi () {
  return new Promise((resolve, reject) => {
    fs.readFile("./resources/插秧诗.md", (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function readGuanShu () {
  return new Promise((resolve, reject) => {
    fs.readFile("./resources/观书有感.md", (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

async function main () {
  // 获取为学内容
  let weixue = await readWeiXue()
  let chayang = await readChaYangShi()
  let guanshu = await readGuanShu()
  console.log(weixue.toString())
  console.log(chayang.toString())
  console.log(guanshu.toString())
}
main()
