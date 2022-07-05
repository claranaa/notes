const fs = require("fs")
fs.readFile("../素材/成绩.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("读取文件失败！" + err.message)
  }
  // console.log("读取文件成功！" + dataStr)
  // 1. 先把成绩的数据，按照空格进行分割，得到数组
  const arrOld = dataStr.split(" ")
  // console.log(arrOld)
  // 2. 循环分割后的数组，对每一项数据，进行字符串的替换
  const arrNew = []
  arrOld.forEach(item => {
    arrNew.push(item.replace("=", "："))
  })
  // 3. 把新数组中的每一项进行合并，得到一个新的字符串
  const newStr = arrNew.join("\r\n")

  // 4. 把处理完毕的数据写入到新文件中
  fs.writeFile("./files/成绩-ok.txt", newStr, function (err) {
    if (err) {
      return console.log("写入文件失败！" + err.message)
    }
    console.log("成绩写入成功！")
  })
})
