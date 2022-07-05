const express = require("express")
const app = express()

// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require("cors")
app.use(cors())

// 挂载路由
app.get("/", (req, res) => {
  res.send("Hello World.")
})

app.post("/", (req, res) => {
  res.send("Post Request.")
})

app.get("/adata", (req, res) => {
  res.send("Hello axios!")
})
// __dirname知道是啥把知道 就是当前工作目录嗯嗯
// 当你请求路径不满足上面的这些api 就会去请求这下面的静态文件
// 因为express中间件是从上往下的，这个明白吧嗯嗯差不多知道啥意思了别的路走不通走了脏鞥走通了
// 对 所以这些代码就完成了两个功能 一个是通过get post 方法请求资源
// 第二个就是获取静态文件 你获取的静态文件如果是html就会在浏览器里面展示出来
// 它的url和你请求的接口的url是同源的 所以就不会跨域
// 就加上下面这句话或者那一坨都可以解决了？ 是的那还是这句话把
// 工作中更多是加上响应头 因为静态文件服务器和api服务器通常是不同的
// 你自己学的话 怎么方便怎么来好的 我忙自己的去了 小余老师溜了拜拜谢谢
// (#^.^#)
// app.use(express.static(__dirname))

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1")
})
