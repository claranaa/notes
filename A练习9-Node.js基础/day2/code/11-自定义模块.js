// 在一个自定义模块中，默认情况下，module.exports={}

const age = 20

// 向module.exports对象上挂载一个username属性
module.exports.username = "zs"
// 向module.exports对象上挂载一个sayHello方法
module.exports.sayHello = function () {
  console.log("Hello!")
}
module.exports.age = age

// 让module.exports指向一个全新的对象
module.exports = {
  nickname: "小黑",
  sayHi: function () {
    console.log("Hi!")
  },
  seeYou () {
    console.log("see you next time!")
  }
}
