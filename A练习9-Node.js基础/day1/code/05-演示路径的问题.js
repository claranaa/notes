const fs = require("fs")
/* fs.readFile("./files/1.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("读取文件失败！" + err.message)
  }
  console.log("读取文件成功！" + dataStr)
}) */

/* fs.readFile(
  "C:\\Users\\Administrator\\Desktop\\前端开发\\A练习9-Node.js基础\\day1\\code\\files\\1.txt",
  "utf8",
  function (err, dataStr) {
    if (err) {
      return console.log("读取文件失败！" + err.message)
    }
    console.log("读取文件成功！" + dataStr)
  }
) */

// __dirname表示当前文件所处的目录
// console.log(__dirname)

fs.readFile(__dirname + "/files/1.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("读取文件失败！" + err.message)
  }
  console.log("读取文件成功！" + dataStr)
})
