## 安装
```
npm install itheima-tools-xnn

```
## 导入
```js
const itheima=require('itheima-tools-xnn')
```

## 格式化时间
```js
// 调用dateFormat对时间进行格式化
const dtStr = itheima.dateFormat(new Date())
// 结果 2022-4-28 16:52:26
console.log(dtStr)
```

## 转义HTML中的特殊字符
```js
// 待转换的HTML字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// 调用htmlEscape方法进行转换
const str = itheima.htmlEscape(htmlStr)
// 转换结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原HTML中的特殊字符
```js
// 待还原的HTML字符串
const str2 = itheima.htmlUnEscape(str)
// 输出的结果  <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2)
```

## 开源协议
ISC