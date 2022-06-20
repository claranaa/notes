// import * as m1 from "./hello.js"  静态引入的，不管你用不用都给引入
// 获取元素
const btn = document.getElementById("btn")
btn.onclick = function () {
  import("./hello.js").then(module => {
    // console.log(module)
    module.hello()
  })
}
