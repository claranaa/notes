# 1. Web APIs 简介

## 1.1 Web APIs 和 JS 基础关联性

### 1.1.1  JS的组成

（1）ECMAScript（JavaScript语法）  （2）DOM（页面文档对象模型）  （3）BOM(浏览器对象模型)

### 1.1.2 JS基础阶段以及Web APIs阶段

**JS基础阶段**

- 我们学习的是ECMAScript标准规定的基本语法
- 要求掌握JS基础语法
- 只学习基本语法，做不了常用的网页交互效果
- 目的是为了JS后面的课程打基础、做铺垫

**Web APIs阶段**

- Web APIs是W3c组织的标准
- Web APIs 我们主要学习DOM和BOM
- Web APIs是我们JS所独有的部分
- 我们主要学习页面交互功能
- 需要使用JS基础的课程内容做基础

JS基础学习ECMAScript基础语法为后面做铺垫，Web APIs是JS的应用，大量使用JS基础语法做交互效果

## 1.2 API 和 Web API

### 1.2.1 API

API(Application Programming Interface，**应用程序编程接口**)是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。

简单理解：API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能。

比如手机充电的接口：

我们要实现这个功能：

- 我们不关心手机内部变压器，内部怎么存储电等
- 我们不关心这个充电线怎么制作的
- 我们只知道，我们拿着充电线插进充电接口就可以充电
- 这个**充电接口就是一个API**

### 1.2.2 Web API

**Web API是浏览器**提供的一套操作**浏览器功能**和**页面元素**的API（BOM和DOM）。

现阶段我们主要针对于浏览器讲解常用的API，主要针对浏览器做交互效果。

比如我们想要浏览器弹出一个警示框，直接使用alert(‘弹出’)

MDN详细 API：http://developer.mozilla.org/zh-CN/docs/Web/API

因为Web API很多，所以我们将这个阶段称为Web APIS

### 1.2.3 API 和 Web API 总结

1. API是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现
2. Web API主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果
3. Web API一般都有输入和输出（函数的传参和返回值），Web API很多都是方法（函数）
4. 学习Web API可以结合前面学习内置对象方法的思路学习

# 2. DOM

## 2.1 DOM 简介

### 2.1.1 什么是DOM

文档对象类型(Document Object Model，简称**DOM**)，是W3C组织推荐的处理可扩展标记语言(HTML或者XML)的标准**编程接口**。

W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。

### 2.1.2 DOM 树

- 文档：一个页面就是一个文档，DOM中使用document表示
- 元素：页面中的所有标签都是元素，DOM中使用element表示
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用node表示

**DOM把以上内容都看作是对象**

## 2.2 获取元素

### 2.2.1 如何获取页面元素

DOM在我们实际开发中主要用来操作元素。获取页面中的元素可以使用以下几种方式：

- 根据**ID**获取

  使用getElementById()方法可以获取带有ID的元素对象

- 根据**标签名**获取

  使用getElementsByTagName()方法可以返回带有指定标签名的**对象的集合**。

  **语法**：

  document.getElementsByTagName(‘标签名’);

  **注意：**

  1. **因为得到的是一个对象的集合，所以我们想要操作里面的元素就需要遍历。**
  2. **得到元素对象是动态的**

  还可以获取某个元素（父元素）内部所有指定标签名的子元素

  语法：

  element.getElementsByTagName(‘标签名’);

  注意：父元素必须是**单个对象（必须指明是哪一个元素对象）**，获取的时候不包括父元素自己

- 通过HTML5新增的方法获取

  1. document.getElementsByClassName(‘类名’);   // 根据类名返回元素对象集合
  2. document.querySelector(‘选择器’)；  // 根据指定选择器返回第一个元素对象
  3. document.querySelectorAll(‘选择器’);    // 根据指定选择器返回

- 特殊元素获取(body，html)

  **获取body元素**

  语法：**document.body    // 返回body元素对象**

  **获取html元素**

  语法：**document.documentElement      // 返回html元素对象**

## 2.3 事件基础

### 2.3.1 事件概述

JS使我们有能力创建动态页面，而事件是可以被JS侦测到的行为。

简单理解：**触发---响应机制**

网页中的每个元素都可以产生某些可以触发JS的事件，例如，我们可以在用户点击某按钮时产生一个事件，然后去执行某些操作。

### 2.3.2 事件三要素

事件是由三部分组成 **事件源 事件类型 事件处理程序** 我们也称为事件三要素

(1) 事件源：事件被触发的对象 谁 按钮

(2) 事件类型：如何触发 什么事情 比如鼠标点击(onclick)  还是鼠标经过 还是键盘按下

(3) 事件处理程序：通过一个函数赋值的方式 完成

### 2.3.3 执行事件的步骤

1. 获取事件源
2. 注册事件（绑定事件）
3. 添加事件处理程序（采取函数赋值的形式）

### 2.3.4 常见的鼠标事件

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |



## 2.4 操作元素

JS的DOM操作可以改变网页内容、结构和样式，我们可以利用DOM操作元素来改变元素里面的内容、属性等。注意以下都是属性。

### 2.4.1 改变元素内容

**element.innerText**

从起始位置到终止位置的内容，但它去除html标签(不识别html标签），同时空格和换行也会去掉

**element.innerHTML**

起始位置和终止位置的全部内容，包括html标签，同时保留空格和换行

### 2.4.2 常用元素的属性操作

1. innerText、innerHTML改变元素内容
2. src、href
3. id、alt、title

### 2.4.3 分时问候案例

案例：分时显示不同图片，显示不同问候语

根据不同时间，页面显示不同图片，同时显示不同的问候语。

如果上午时间打开页面，显示上午好，显示上午的图片。

如果下午时间打开页面，显示下午好，显示下午的图片。

如果晚上时间打开页面，显示晚上好，显示晚上的图片。

### 2.4.4 表单元素的属性操作

利用DOM可以操作如下表单元素的属性：

type、value、checked、selected、disabled

#### 2.4.4.1 密码框显示与隐藏案例分析

（1）核心思路：点击眼睛按钮，把密码框类型改为文本框就可以看见里面的密码

（2）一个按钮两个状态，点击一次，切换为文本框，继续点击一次切换为密码框

（3）算法：利用一个flag变量，来判断flag的值，如果是1就切换为文本框，flag设置为0，如果是0就切换为密码框，flag设置为1

### 2.4.5 样式属性操作

我们可以通过JS修改元素的大小、颜色、位置等样式。

1. element.style   行内样式操作
2. element.className   类名样式操作

**注意：**

**（1）JS里面的样式采取驼峰命名法 比如 fontSize、backgroundColor**

**（2）JS修改style样式操作，产生的是行内样式，css权重比较高**

**（3）如果样式修改较多，可以采取操作类名方式更改元素样式**

**（4）class因为是个保留字，因此使用className来操作元素类名属性**

**（5）className会直接更改元素的类名，会覆盖原先的类名**

#### 2.4.5.1 案例-淘宝点击关闭二维码

当鼠标点击二维码关闭按钮的时候，则关闭整个二维码

（1）核心思路：利用样式的显示与隐藏完成，display：none隐藏元素 display：block显示元素

（2）点击按钮，就让这个二维码盒子隐藏起来即可

#### 2.4.5.2 案例-循环精灵图背景

可以利用for循环设置一组元素的精灵图背景

```html
<script>
    var lis = document.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
      // 让索引号 乘以 44 就是每个li 的背景y坐标
      var index = i * 44;
      lis[i].style.backgroundPosition = '0 -' + index + 'px';
    }
  </script>
```

#### 2.4.5.3 案例-显示隐藏文本框内容

当鼠标点击文本框时，里面的默认文字隐藏，当鼠标离开文本框时，里面的文字显示。

案例分析

（1）首先表单需要2个新事件，获得焦点onfocus  失去焦点 onblur

（2）如果获得焦点，判断表单里面内容是否为默认文字，如果是默认文字，就清空表单内容

（3）如果失去焦点，判断表单内容是否为空，如果为空，则表单内容改为默认文字

#### 2.4.5.4 密码框格式提示错误信息

用户如果离开密码框，里面输入个数不是6~16，则提示错误信息，否则提示输入正确信息

案例分析

（1）首先判断的事件是表单失去焦点onblur

（2）如果输入正确则提示正确的信息颜色为绿色小图标变化

（3）如果输入不是6到16位，则提示错误信息颜色为红色 小图标变化

（4）**因为里面变化样式较多，我们采取className修改样式**

### 2.4.6 操作元素总结

操作元素是DOM核心内容

操作元素：

（1）操作元素内容 

- innerText
- **innerHTML（经常使用）**

（2）操作常见元素属性 

- src、href、title、alt等

（3）操作表单元素属性 

- type、value、disabled等

（4）操作元素样式属性

- element.style
- **className**

以上元素都是可读写的

### 2.4.7 排他思想

如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法：

1. 所有元素全部清除样式（干掉其他人）
2. 给当前元素设置样式（留下我自己）
3. 注意顺序不能颠倒，首先干掉其他人，再设置自己

#### 2.4.7.1 案例--百度换肤案例

 <script>
    var imgs = document.querySelector('.baidu').querySelectorAll('img');
    // console.log(imgs);
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].onclick = function () {
        // this.src 就是我们点击图片的路径
        // console.log(this.src);
        // 把这个路径 this.src 给 body 就可以了
        document.body.style.backgroundImage = 'url(' + this.src + ')';
      }
    }
  </script>

#### 2.4.7.2 案例--表格隔行变色

案例分析

（1）用到新的鼠标事件 鼠标经过 onmouseover  鼠标离开 onmouseout

（2）核心思路：鼠标经过tr行，当前的行变背景颜色，鼠标离开去掉当前的背景颜色

（3）注意：第一行（thead里面的行）不需要变换颜色，因此我们获取的是tbody里面的行

<script>
    var trs = document.querySelector('tbody').querySelectorAll('tr');
    for (var i = 0; i < trs.length; i++) {
      trs[i].onmouseover = function () {
        // console.log(11);
        this.className = 'bg';
      }
      trs[i].onmouseout = function () {
        this.className = '';
      }
    }
  </script>

#### 2.4.7.3 案例--表单全选取消全选案例

案例分析

（1）全选和取消全选做法：让下面所有复选框的checked属性（选中状态）跟随 全选按钮即可

<script>
    var j_cbAll = document.getElementById('j_cbAll'); // 全选按钮
    var j_tbs = document.getElementById('j_tb').getElementsByTagName('input');
    j_cbAll.onclick = function () {
      // this.checked 它可以得到当前复选框的选中状态如果是true就是选中，如果是false 就是未选中
      // console.log(this.checked);
      for (var i = 0; i < j_tbs.length; i++) {
        j_tbs[i].checked = this.checked;
      }
    }
  </script>

（2）下面复选框需要全部选中，上面全选才能选中做法：给下面所有复选框绑定点击事件，每次点击，都要循环查看下面所有的复选框是否有没选中的，如果有一个没选中的，上面全选就不选中。

（3）可以设置一个变量，来控制全选是否选中

 <script>
    for (var i = 0; i < j_tbs.length; i++) {
      j_tbs[i].onclick = function () {
        // flag 控制全选按钮 是否选中
        var flag = true;
        //每次点击下面的复选框都要循环检查这4个小按钮是否全被选中
        for (var i = 0; i < j_tbs.length; i++) {
          if (!j_tbs[i].checked) {
            // j_cbAll.checked = false;
            flag = false;
            break; // 退出for循环，这样可以提高执行效率，因为只要有一个没有选中，剩下的就无需循环判断了
          }
        }
        j_cbAll.checked = flag;
      }
    }
  </script>

### 2.4.8 自定义属性的操作

1. 获取属性值

   - **element.属性**    获取属性值
   - element.getAttribute(‘属性’);

   区别：

   - **element.属性**  获取内置属性值（元素本身自带的属性）
   - element.getAttribute(‘属性’)； 主要获得自定义的属性（标准）我们程序员自定义的属性

2. 设置属性值

   - element.属性 = ‘值’     设置内置属性值
   - element.setAttribute(‘属性’，‘值’);

3. 移除属性

   - element.removeAttribute(‘属性’);

#### 2.4.8.1 案例--tab栏切换（重点案例）

当鼠标点击上面相应的选项卡（tab），下面内容跟随变化

案例分析

（1）Tab栏切换有2个大的模块

（2）上面的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想）修改类名的方式

（3）下面的模块内容，会跟随上面的选项卡变化，所以下面模块变化写到点击事件里面

（4）规律：下面的模块显示内容和上面的选项卡一一对应，相匹配

（5）核心思路：给上面的tab_list里面的所有小li添加自定义属性，属性值从0开始编号

（6）当我们点击tab_list里面的某个小li，让tab_con里面对应序号的内容显示，其余隐藏（排他思想）

### 2.4.9 H5自定义属性

**自定义属性的目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。**

自定义属性获取是通过getAttribute(‘属性’)获取。

但是有些自定义属性很容易引起歧义，不容易判断是元素的内置属性还是自定义属性。

H5给我们新增了自定义属性：

1. 设置H5自定义属性

   H5规定自定义属性data-开头作为属性名并赋值。

   **比如< div data-index = ‘1'>< /div>**

   **或者使用JS设置**

   **element.setAttribute(‘data-index’,2);**

2. 获取H5自定义属性

   （1）兼容性获取   element.getAttribute(‘data-index’);

   （2）H5新增element.dataset.**index**   或者element.dataset[‘index’];  **ie11才开始支持**  只能获取data-开头的

## 2.5 节点操作

### 2.5.1 为什么学节点操作

获取元素通常使用两种方式：

1. **利用DOM提供的方法获取元素**
   - document.getElementById()
   - document.getElementByTagName()
   - document.querySelector()等
   - 逻辑性不强、繁琐
2. **利用节点层级关系获取元素**
   - 利用父子兄节点关系获取元素
   - 逻辑性强，但是兼容性稍差

这两种方式都可以获取元素节点，我们后面都会使用，但是节点操作更简单

### 2.5.2 节点概述

网页中的所有内容都是节点（标签、属性、文本、注释等),在DOM中，节点使用node来表示。

HTML  DOM树中的所有节点均可通过JavaScript进行访问，所有HTML元素（节点）均可被修改，也可以创建或删除。

一般地，节点至少拥有node Type（节点类型）、nodeName（节点名称）、nodeValue（节点值）这三个基本属性。

- 元素节点  nodeType  为   1
- 属性节点  nodeType  为   2
- 文本节点  nodeType  为   3（文本节点包含文字、空格、换行等）

我们在实际开发中，节点操作主要操作的是元素节点。

### 2.5.3 节点层级

利用DOM树可以把节点划分为不同的层级关系，常见的是父子兄层级关系。

- 父级节点

  语法：node.parentNode

  - parentNode属性可返回某节点的父节点，注意是最近的一个父节点
  - 如果指定的节点没有父节点则返回null

- 子节点

  子节点（1）

  语法：parentNode.childNodes（标准）

  parentNode.childNodes返回包含指定节点的子节点的集合，该集合为及时更新的集合。

  注意：返回值里面包含了所有的子节点，包括元素节点，文本节点等

  如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用childNodes

  **子节点（2）**

  语法：parentNode.children（非标准）

  **parentNode.children**是一个只读属性，返回所有子元素节点。它只返回子元素节点，其余节点不返回（**这个是我们重点掌握的**)。

  虽然children是一个非标准，但是得到了各个浏览器的支持，因此可以放心使用

  **子节点（3）**

  语法：parentNode.firstChild

  firstChild返回第一个子节点，找不到则返回null。同样，也是包含所有的节点。

  语法：parentNode.lastChild

  lastChild返回最后一个子节点，找不到则返回null。同样，也是包含所有的节点。

  **子节点（4）**

  语法：parentNode.firstElementChild

  firstElementChild 返回第一个子元素节点，找不到则返回null。

  语法：parentNode.lastElementChild

  lastElementChils 返回最后一个子元素节点，找不到则返回null。

  **注意：这两个方法有兼容性问题，IE9以上才支持。**

- 兄弟节点

  语法：node.nextSibling

  nextSibling返回当前元素的下一个兄弟节点，找不到则返回null。同样，也是包含所有的节点。

  语法：node.previousSibling

  previousSibling返回当前元素上一个兄弟节点，找不到则返回null。同样，也是包含所有的节点。

  语法：node.nextElementSibling

  nextElementSibling返回当前元素下一个兄弟元素节点，找不到则返回null。

  语法：node.previousElementSibling

  previousElementSibling返回当前元素上一个兄弟元素节点，找不到则返回null。

  **注意：这两个方法有兼容性问题，IE9以上才支持。**

  问：如何解决兼容性问题？

  答：自己封装一个兼容性的函数

  function getNextElementSibling(element) {

  ​	var el = element;

  ​	while (el = el.nextSibling)  {

  ​		if (el.nodeType === 1)  {

  ​			return el;

  ​		}

  ​    }

  ​	return null;

  }

### 2.5.4 创建节点

语法：document.creatElement(‘tagName’);

document.createElement()方法创建由tagName指定的HTML元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为**动态创建元素节点**。

### 2.5.5 添加节点

语法：node.appendChild(child)

node.appendChild()方法将一个节点添加到指定父节点的子节点列表**末尾**。类似于css里面的after伪元素。

语法：node.insertBefore(child,指定元素)

node.insertBefore()方法将一个节点添加到父节点的指定子节点**前面**。类似于css里面的before伪元素。

### 2.5.6 案例--简单版发布留言

（1）核心思路：点击按钮之后，就动态创建一个li，添加到ul里面。

（2）创建li的同时，把文本域里面的值通过li.innerHTML赋给li

（3）如果想要新的留言后面显示就用appendChild如果想要前面显示就用insertBefore

<script>
    // 1. 获取元素
    var btn = document.querySelector('button');
    var text = document.querySelector('textarea');
    var ul = document.querySelector('ul');
    // 2. 注册事件
    btn.onclick = function () {
      if (text.value == '') {
        alert('您没有输入内容');
        return false;
      } else {
        // console.log(text.value);
        // (1)创建元素
        var li = document.createElement('li');
        // 先有li 才能赋值
        li.innerHTML = text.value;
        // (2) 添加元素
        // ul.appendChild(li);
        ul.insertBefore(li, ul.children[0]);
      }
    }
  </script>

### 2.5.7 删除节点

语法：**node.removeChild(child)**

node.removeChild()方法从DOM中删除一个子节点，返回删除的节点。

#### 2.5.7.1 案例--删除留言

案例分析

（1）当我们把文本域里面的值赋给li的时候，多添加一个删除的链接

（2）需要把所有的链接获取过来，当我们点击当前的链接的时候，删除当前链接所在的li

（3）阻止链接跳转需要添加javascript:void(0);  **或者  javascript:;**

<script>
    // 1. 获取元素
    var btn = document.querySelector('button');
    var text = document.querySelector('textarea');
    var ul = document.querySelector('ul');
    // 2. 注册事件
    btn.onclick = function () {
      if (text.value == '') {
        alert('您没有输入内容');
        return false;
      } else {
        // (1) 创建元素
        var li = document.createElement('li');
        // 先有li 才能赋值
        li.innerHTML = text.value + "<a href='javascript:;'>删除</a>";
        // (2) 添加元素
        ul.insertBefore(li, ul.children[0]);
        // (3) 删除元素  删除的是当前链接的li  它的父亲
        var as = document.querySelectorAll('a');
        for (var i = 0; i < as.length; i++) {
          as[i].onclick = function () {
            // node.removeChild(child); 删除的是li 当前a所在的li this.parentNode;
            ul.removeChild(this.parentNode);
          }
        }
      }
    }
  </script>

### 2.5.8 复制节点(克隆节点)

语法：node.cloneNode()

node.cloneNode()  方法返回调用该方法的节点的一个副本。也称为克隆节点/拷贝节点

注意：

1. 如果括号参数为**空或者为false，则是浅拷贝**，即只克隆复制节点本身，不克隆里面的子节点。
2. 如果括号参数为**true**，则是**深度拷贝**，会复制节点本身以及里面所有的子节点。

#### 2.5.8.1 案例--动态生成表格

案例分析

（1）因为里面的学生数据都是动态的，我们需要js动态生成。这里我们模拟数据，自己定义好数据。数据我们采取对象形式存储。

（2）所有的数据都是放到tbody里面的行里面。

（3）因为行很多，我们需要循环创建多个行（对应多个人）。

（4）每个行里面又有很多单元格（对应里面的数据），我们还继续使用循环创建多个单元格，并且把数据存入里面（双重for循环）。

（5）最后一列单元格是删除，需要单独创建单元格。

 <script>
    // 1. 先去准备好学生的数据
    var datas = [
      {
        name: '魏璎珞',
        subject: 'JavaScript',
        score: 100
      }, {
        name: '弘历',
        subject: 'JavaScript',
        score: 98
      }, {
        name: '傅恒',
        subject: 'JavaScript',
        score: 99
      }, {
        name: '明玉',
        subject: 'JavaScript',
        score: 88
      }, {
        name: '大猪蹄子',
        subject: 'JavaScript',
        score: 0
      }
    ];
    // 2. 往body里面创建行：有几个人（通过数组的长度）我们就创建几行
    var tbody = document.querySelector('tbody');
    for (var i = 0; i < datas.length; i++) {  // 外面的for循环管行tr
      // 1. 创建tr行
      var tr = document.createElement('tr');
      tbody.appendChild(tr);
      // 2. 行里面创建单元格(跟数据有关系的3个单元格) td 单元格的数量取决于每个对象里面的属性个数 for循环遍历对象 datas[i]
      for (var k in datas[i]) {   // 里面的for循环管列td
        var td = document.createElement('td');
        // 把对象里面的属性值 datas[i][k] 给 td
        // console.log(datas[i][k]);
        td.innerHTML = datas[i][k];
        tr.appendChild(td);
      }
      // 3. 创建有删除2个字的单元格
      var td = document.createElement('td');
      td.innerHTML = '<a href="javascript:;">删除</a>';
      tr.appendChild(td);
    }
    // 4. 删除操作开始
    var as = document.querySelectorAll('a');
    for (var i = 0; i < as.length; i++) {
      as[i].onclick = function () {
        // 点击a 删除当前a所在的行(链接的爸爸的爸爸) node.removeChild(child)
        tbody.removeChild(this.parentNode.parentNode);
      }
    }

### 2.5.9 三种动态创建元素区别

- document.write()
- element.innerHTML
- document.createElement()

**区别：**

1. document.write是直接将内容写入页面的内容流，**但是文档流执行完毕，则它会导致页面全部重绘**
2. innerHTML是将内容写入某个DOM节点，不会导致页面全部重绘
3. innerHTML创建多个元素效率会更高（**不要拼接字符串，采取数组形式拼接**），结构稍微复杂
4. createElement()  创建多个元素效率稍低一点点，但是结构更清晰

**总结：不同浏览器下，innerHTML效率要比createElement高**

## 2.6 DOM重点核心

文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML）的**标准编程接口**。

W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。

1. 对于JS，为了能够使JS操作HTML，JS就有了一套自己的dom编程接口。
2. 对于HTML，dom使得html形成一颗dom树，包含文档、元素、节点
3. 我们获取过来的DOM元素是一个对象（object），所以称为文档对象模型

关于dom操作，我们主要针对于元素的操作。主要有创建、增、删、改、查、属性操作、事件操作。

### 2.6.1 创建

1. document.write
2. innerHTML
3. createElement

### 2.6.2 增

1. appendChild
2. insertBefore

### 2.6.3 删

1. removeChild

### 2.6.4 改

主要修改dom的元素属性，dom元素的内容、属性，表单的值等

1. 修改元素属性：src、href、title等
2. 修改普通元素的属性：innerHTML、innerText
3. 修改表单元素：value、type、disabled等
4. 修改元素样式：style、className

### 2.6.5 查

主要获取查询dom的元素

1. DOM提供的API方法：getElementById、getElementByTagName 古老用法 不太推荐
2. H5提供的新方法：querySelector、querySelectorAll 提倡
3. 利用节点操作获取元素：父（parentNode）、子（children）、兄（previousSibling、nextSibling）提倡

### 2.6.6 属性操作

主要针对于自定义属性

1. setAttribute：设置dom的属性值
2. getAttribute：得到的dom属性值
3. removeAttribute：移除属性

### 2.6.7 事件操作

给元素注册事件，采取 **事件源.事件类型 = 事件处理程序**

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

# 3. 事件高级

## 3.1 注册事件（绑定事件）

### 3.1.1 注册事件概述

给元素添加事件，称为**注册事件**或者**绑定事件**。

注册事件有两种方式：**传统方式和方法监听注册方式**

**传统注册方式**

- 利用on开头的事件onclick
- <button onclick = “alert(‘hi~’)"></button>
- btn.onclick = function () {}
- 特点：注册事件的**唯一性**
- 同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数

**方法监听注册方式**

- w3c标准 推荐方式
- addEventListener()它是一个方法
- IE9之前的IE不支持此方法，可使用attachEvent()代替
- 特点：同一个元素同一个事件可以注册多个监听器
- 按注册顺序依次执行

### 3.1.2 addEventListener事件监听方式

**语法：eventTarget.addEventListener(type, listener [, useCapture])**

eventTarget.addEventListener()方法将指定的监听器注册到eventTarget（目标对象）上，当该对象触发指定的事件时，就会执行事件处理函数。

该方法接收三个参数：

- type：事件类型字符串，比如click、mouseover，注意这里不要带on
- listener：事件处理函数，事件发生时，会调用该监听函数
- useCapture：可选参数，是一个布尔值，默认是false。

### 3.1.3 attachEvent 事件监听方式

语法：enevtTarget.attachEvent(eventNameWithOn, callback)

enevtTarget.attachEvent()方法将指定的监听器注册到eventTarget（目标对象）上，当该对象触发指定的事件时，指定的回调函数就会被执行。

该方法接收两个参数：

- **eventNameWithOn：**事件类型字符串，比如onclick、onmouseover，这里要带on
- **callback：**事件处理函数，当目标触发事件时回调函数被调用

注意：IE8 及早期版本支持

## 3.2 删除事件（解绑事件）

### 3.2.1 删除事件的方式

1. 传统注册方式

   eventTarget.onclick = null；

2. 方法监听注册方式

   （1）eventTarget.removeEventListener(type, listener [,useCapture]);

   （2）eventTarget.detachEvent(eventNameWithOn,callback);

## 3.3 DOM事件流

**事件流**描述的是从页面中接收事件的顺序。

**事件**发生时会在元素节点之间按照特定的顺序传播，这个**传播过程**即**DOM事件流**。

DOM事件流分为3个阶段：

1. 捕获阶段
2. 当前目标阶段
3. 冒泡阶段

- 事件冒泡：IE最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到DOM最顶层节点的过程。
- 事件捕获：网景最早提出，由DOM最顶层节点开始，然后逐级向下传播到最具体的元素接收的过程。

我们向水里扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素（目标）的捕获过程；之后会产生泡泡，会在最低点（最具体元素）之后漂浮到水面上，这个过程相当于事件冒泡



**事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。**

**注意：**

1. JS代码中只能执行捕获或者冒泡其中的一个阶段。
2. onclick和attachEvent只能得到冒泡阶段。
3. addEventListener(type, listener [,useCapture])第三个参数如果是true，表示在事件捕获阶段调用事件处理程序；如果是false（不写默认就是false），表示在事件冒泡阶段调用事件处理程序。
4. 实际开发中我们很少使用事件捕获，我们更关注事件冒泡
5. 有些事件是没有冒泡的，比如onblur、onfocus、onmouseenter、onmouseleave
6. 事件冒泡有时候会带来麻烦，有时候又会帮助很巧妙的做某些事件

## 3.4 事件对象

### 3.4.1 什么是事件对象

eventTarget.onclick = function(event)  {}

eventTarget.addEventListener(‘click’,function(event) {})

// 这个event就是事件对象，我们还喜欢写成e或者evt

**官方解释：**event对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。

**简单理解：**事件发生后，**跟事件相关的一系列信息数据的集合**都放到这个对象里面，这个对象就**是事件对象event**，它有很多属性和方法

这个event是个形参，系统帮我们设定为事件对象，不需要传递实参过去。

**当我们注册事件时，event对象就会被系统自动创建，并依次传递给事件监听器（事件处理函数）**

### 3.4.2 事件对象的常见属性和方法

| 事件对象属性方法        | 说明                                                         |
| ----------------------- | ------------------------------------------------------------ |
| e.target                | 返回触发事件的对象   标准                                    |
| e.srcElement            | 返回触发事件的对象    非标准  ie6-8使用                      |
| e.type                  | 返回事件的类型  比如  click  mouseover  不带on               |
| e.cancelBubble          | 该属性阻止冒泡  非标准  ie6-8使用                            |
| e.returnValue           | 该属性 阻止默认事件（默认行为） 非标准  ie6-8使用 比如不让链接跳转 |
| **e.preventDefault()**  | 该方法阻止默认事件（默认行为）标准  比如不让链接跳转         |
| **e.stopPropagation()** | 阻止冒泡 标准                                                |



## 3.5 阻止事件冒泡

### 3.5.1 阻止事件冒泡的两种方式

事件冒泡：开始时由最具体的元素接收，然后逐级向上传播到DOM最顶层节点。

事件冒泡本身的特性，会带来坏处，也会带来好处，需要我们灵活掌握。

**阻止事件冒泡**

- 标准写法：利用事件对象里面的stopPropagation()方法

  e.stopPropagation()

- 非标准写法：IE 6-8 利用事件对象cancelBubble属性

## 3.6 事件委托（代理、委派）

事件冒泡本身的特性，会带来坏处，也会带来好处，需要我们灵活掌握。生活中有如下场景：

咱们班有100个学生，快递员有100个快递，如果一个个的送花费时间较长。同时每个学生领取的时候，也需要排队领取，也花费较长时间，何如？

解决方案：快递员把100个快递，**委托**给班主任，班主任把这些快递放到办公室，同学们下课自行领取即可。

优势：快递员省事，委托给班主任就可以了。同学们领取也方便，因为相信班主任。

例：

<ul>
    <li>知否知否，应该有弹框在手</li>
    <li>知否知否，应该有弹框在手</li>
    <li>知否知否，应该有弹框在手</li>
    <li>知否知否，应该有弹框在手</li>
    <li>知否知否，应该有弹框在手</li>
</ul>

点击每个li都会弹出对话框，以前需要给每个li注册事件，是非常辛苦的，而且访问DOM的次数越多，这就会延长整个页面的交互就绪时间。

**事件委托**

事件委托也称为事件代理，在jQuery里面称为事件委派。

**事件委托的原理**

**不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。**

以上案例：给ul注册点击事件，然后利用事件对象的target来找到当前点击的li，因为点击li，事件会冒泡到ul上，ul有注册事件，就会触发事件监听器。

**事件委托的作用**

我们只操作了一次DOM，提高了程序的性能。

## 3.7 常用的鼠标事件

### 3.7.1 常用的鼠标事件

1. 禁止鼠标右键菜单

   contextmenu主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单

   document.addEventListener(‘contextmenu’,function(e) {

   ​	e.preventDefault();})

2. 禁止鼠标选中（selectstart 开始选中）

   document.addEventListner(‘selectstart’,function(e) {

   ​	e.preventDefault();})

### 3.7.2 鼠标事件对象

**event**对象代表事件的状态，跟事件相关的一系列信息的集合。现阶段我们主要是用鼠标事件对象MouseEvent和键盘事件对象KeyboardEvent。

| 鼠标事件对象 | 说明                                    |
| ------------ | --------------------------------------- |
| e.clientX    | 返回鼠标相对于浏览器窗口可视区X坐标     |
| e.clientY    | 返回鼠标相对于浏览器窗口可视区Y坐标     |
| e.pageX      | 返回鼠标相对于文档页面的X坐标  IE9+支持 |
| e.pageY      | 返回鼠标相对于文档页面的Y坐标  IE9+支持 |
| e.screenX    | 返回鼠标相对于电脑屏幕的X坐标           |
| e.screenY    | 返回鼠标相对于电脑屏幕的Y坐标           |

### 3.7.3 案例--跟随鼠标的天使

天使图片一直跟随鼠标移动

（1）鼠标不断移动，使用鼠标移动事件：mousemove

（2）在页面中移动，给document注册事件

（3）图片要移动距离，而且不占位置，我们使用绝对定位即可

（4）核心原理：每次鼠标移动，我们都会获得最新的鼠标坐标，把这个x和y坐标作为图片的top和left值就可以移动图片

## 3.8 常用的键盘事件

### 3.8.1 常见键盘事件

事件除了使用鼠标触发，还可以使用键盘触发。

| 键盘事件   | 触发事件                                                     |
| ---------- | ------------------------------------------------------------ |
| onkeyup    | 某个键盘按键被松开时触发                                     |
| onkeydown  | 某个键盘按键被按下时触发                                     |
| onkeypress | 某个键盘按键被按下时触发  **但是它不识别功能键 比如 ctrl shift箭头等** |

注意：

1. 如果使用addEventListener不需要加on
2. onkeypress和前面2个的区别是，它不识别功能键，比如左右箭头，shift等
3. 三个事件的执行顺序是：keydown -- keypress -- keyup

### 3.8.2 键盘事件对象

| 键盘事件对象属性 | 说明                  |
| ---------------- | --------------------- |
| keyCode          | 返回**该**键的ASCII值 |

**注意：onkeydown和onkeyup不区分字母大小写，onkeypress区分字母大小写**

**在我们实际开发中，我们更多的使用keydown和keyup，它能识别所有的键（包括功能键）**

**Keypress不识别功能键，但是keyCode属性性能区分大小写，返回不同的ASCII值**

#### 3.8.2.1 案例--模拟京东按键输入内容

当我们按下s键，光标就定位到搜索框

（1）核心思路：检测用户是否按下了s键，如果按下s键，就把光标定位到搜索框里面

（2）使用键盘事件对象里面的keyCode判断用户按下的是否是s键

 （3）搜索框获得焦点：使用js里面的focus()方法

#### 3.8.2.2 模拟京东快递单号查询

要求：当我们在文本框中输入内容时，文本框上面自动显示大字号的内容

案例分析：

（1）快递单号输入内容时，上面的大号字体盒子（con)显示（这里面的字号更大）

（2）表单检测用户输入：给表单添加键盘事件

（3）同时把快递单号里面的值（value）获取过来赋值给con盒子（inner Text）作为内容

（4）如果快递单号里面的内容为空，则隐藏大号字体盒子（con）

（5）当我们失去焦点，就隐藏这个con盒子

（6）当我们获得焦点，并且文本框内容不为空，就显示这个con盒子

<script>
    var con = document.querySelector('.con');
    var jd_input = document.querySelector('.jd');
    jd_input.addEventListener('keyup', function (e) {
      // console.log('输入内容啦');
      if (this.value == '') {
        con.style.display = 'none';
      } else {
        con.style.display = 'block';
        con.innerHTML = this.value;
      }
    })
    // 当我们失去焦点，就隐藏这个con盒子
    jd_input.addEventListener('blur', function () {
      con.style.display = 'none';
    })
    // 当我们获得焦点，就显示这个con盒子
    jd_input.addEventListener('focus', function () {
      if (this.value !== '') {
        con.style.display = 'block';
      }
    })
  </script>

注意：keydown和keypress在文本框里面的特点：他们两个事件触发的时候，文字还没有落入文本框中

keyup事件触发的时候，文字已经落入文本框里面了

# 4. BOM浏览器对象模型

## 4.1 BOM概述

### 4.1.1 什么是BOM

BOM（Browser Obiect Model）即**浏览器对象模型**，它提供了独立于内容而与**浏览器窗口进行交互的对象**，其核心对象是window。

BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。

BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Netscape浏览器标准的一部分。

**DOM**                                                                                              

- 文档对象模型                                                                         
- DOM就是把**[文档]**当做一个**[对象]**来看待
- DOM的顶级对象是**document**
- DOM主要学习的是操作页面元素
- DOM是W3C标准规范

**BOM**

- 浏览器对象模型
- 把**[浏览器]**当做一个**[对象]**来看待
- BOM的顶级对象是**window**
- BOM学习的是浏览器窗口交互的一些对象
- BOM是浏览器厂商在各自浏览器上定义的，兼容性较差

### 4.1.2 BOM的构成

BOM比DOM更大，它包含DOM。

window---->   document    location   navigation   screen   history

**window对象是浏览器的顶级对象，**它具有双重角色。

1. 它是JS访问浏览器窗口的一个接口。
2. 它是一个全局对象，定义在全局作用域中的变量、函数都会变成window对象的属性和方法。

在调用的时候可以省略window，前面学习的对话框都属于window对象方法，如alert()、prompt()等。

**注意：window下的一个特殊属性window.name**

## 4.2 window对象的常见事件

### 4.2.1 窗口加载事件

window.onload = function() {}

或者

window.addEventListener(“load”,function() {});

window.onload是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像、脚本文件、CSS文件等），就调用处理函数。

注意：

1. 有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数。
2. window.onload传统注册事件方式只能写一次，如果写多个，会以最后一个window.onload为准
3. 如果使用addEventListener则没有限制

### 4.2.2 调整窗口大小事件

语法：

window.onresize = function() {}

window.addEventListener(“resize”,function() {});

window.onresize 是调整窗口大小加载事件，当触发时就调用处理函数

**注意：**

1. 只要窗口大小发生像素变化，就会触发这个事件。
2. 我们经常利用这个事件完成响应式布局，window.innerWidth当前屏幕的宽度

## 4.3 定时器

### 4.3.1 两种定时器

window对象给我们提供了2个非常好用的方法-**定时器**。

### 4.3.2 setTimeout()

**语法：window.setTimeout(调用函数，[延迟的毫秒数]);**

setTimeout()方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。

注意：

1. window可以省略。
2. 这个调用函数可以**直接写函数**，或者**写函数名**或者采取字符串**‘函数名()’**三种形式。第三种不推荐
3. **延迟的毫秒数省略默认是0（立即调用），如果写，必须是毫秒**。
4. 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。

setTimeout()这个调用函数我们也称为**回调函数callback**

普通函数是按照代码顺序直接调用。

而这个函数，**需要等待**时间，时间到了才去调用这个函数，因此称为回调函数。

简单理解：回调，就是回头调的意思。上一件事干完，再**回**头**调**用这个函数。

element.onclick = function(){} 或者 element.addEventListener(“click”,fn);里面的函数也是回调函数

#### 4.3.2.1 案例--5秒自动关闭的广告

案例分析：

（1）核心思路：5秒之后，就把这个广告隐藏起来

（2）用定时器setTimeout

 <script>
    var ad = document.querySelector('.ad');
    setTimeout(function () {
      ad.style.display = 'none';
    }, 5000);
  </script>

### 4.3.3 停止setTimeout()定时器

window.clearTimeout(timeout ID)

clearTimeout()方法取消了先前通过调用setTimeout()建立的定时器。

 <script>
    var btn = document.querySelector('button');
    var timer = setTimeout(function () {
      console.log('爆炸了');
    }, 5000);
    btn.addEventListener('click', function () {
      clearTimeout(timer);
    })

**注意：**

1. window可以省略。
2. **里面的参数就是定时器的标识符**。

### 4.3.4 setInterval()定时器

**语法：window.setInterval(回调函数，[间隔的毫秒数]);**

setInterval()方法重复调用一个函数，每隔这个时间，就去调用一次回调函数。

注意：

1. window可以省略。
2. 这个调用函数可以**直接写函数**，或者**写函数名**或者采取字符串**‘函数名()’**三种形式。第三种不推荐
3. 间隔的毫秒数省略默认是0（立即调用），如果写，必须是毫秒。表示每隔多少毫秒就自动调用这个函数。
4. 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。

#### 4.3.4.1 案例--倒计时

案例分析：

（1）这个倒计时是不断变化的，因此需要定时器来自动变化(setInterval)

（2）三个黑色的盒子里面分别存放时分秒

（3）三个黑色盒子利用innerHTML放入计算的小时分钟秒数

（4）第一次执行也是间隔毫秒数，因此刚刷新的页面会有空白

（5）最好采取封装函数的方式，这样可以先调用一次这个函数，防止刚开始刷新页面有空白问题

### 4.3.5 停止setInterval()定时器

语法：window.clearInterval(interval ID);

clearInterval()方法取消了先前通过调用setInterval()建立的定时器。

注意：

1. window可以省略。
2. 里面的参数就是定时器的标识符。

#### 4.3.5.1 案例--发送短信

点击按钮后，该按钮60秒之内不能再次点击，防止重复发送短信

 <script>
    var btn = document.querySelector('button');
    var time = 10;
    btn.addEventListener('click', function () {
      btn.disabled = true;
      var timer = setInterval(function () {
        if (time == 0) {
          // 清除定时器，复原按钮
          clearInterval(timer);
          btn.disabled = false;
          btn.innerHTML = '发送';
          time = 10;  // 这个10需要重新开始
        } else {
          btn.innerHTML = '还剩下' + time + '秒';
          time--;
        }
      }, 1000);
    })
  </script>

### 4.3.6 this

**this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般情况下this的最终指向是那个调用它的对象。**

现阶段，我们先了解

## 4.4 JS执行机制(JS执行队列)

JS语言的一大特点就是**单线程**，也就是说，**同一个时间只能做一件事**。这是因为JS这门脚本语言诞生的使命所致——JS是为处理页面中用户的交互，以及操作DOM而诞生的。比如我们对某个DOM元素进行添加和删除操作，不能同时进行。应该先进行添加，之后再删除。

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是：如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

为了解决这个问题，利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程。于是，JS中出现了**同步**和**异步**。

### 4.4.1 同步

前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做法：我们要烧水煮饭，等水开了（10分钟之后）再去切菜，炒菜。

### 4.4.2 异步

你在做一件事时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。

**它们的本质区别：这条流水线上各个流程的执行顺序不同。**

### 4.4.3 同步和异步

**同步任务**

同步任务都在主线程上执行，形成一个**执行栈**。

**异步任务**

JS的异步是通过回调函数实现的。

一般而言，异步任务有以下三种类型：

1、普通事件，如click、resize等

2、资源加载，如load、error等

3、定时器，包括setInterval、setTimeout等

异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）。

### 4.4.5 JS执行机制

1. 先执行**执行栈中的同步任务。**
2. 异步任务（回调函数）放入任务队列中。
3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取**任务队列**中的异步任务，于是读取的异步任务结束等待状态，进行执行栈，开始执行。

由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为**事件循环(eventloop)**

主线程执行栈(同步任务)-----> 异步进程处理----> 任务队列(消息队列)(异步任务)  事件循环

## 4.5 location对象

### 4.5.1 什么是location对象

window对象给我们提供了一个**location属性**用于**获取或设置窗体的URL**，并且可以用于**解析URL**。因为这个属性返回的是一个对象，所以我们将这个属性也称为**location对象**。

### 4.5.2 URL

**统一资源定位符(Uniform Resource Locator，URL)**是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

URL的一般语法格式为：

protocol://host[:port]/path/[?query]#fragment

http://www.itcast.cn/index.html?name=andy&age=18#link

| 组成     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| protocol | 通信协议 常用的http，ftp，maito等                            |
| host     | 主机（域名）www.itheima.com                                  |
| port     | 端口号  可选，省略时使用方案的默认端口 如http的默认端口为80  |
| path     | 路径  由  零或多个‘/’符号隔开的字符串，一般用来表示主机上的一个目录或文件地址 |
| query    | 参数  以键值对的形式通过&符号分隔开来                        |
| fragment | 片段  #后面内容 常见于链接 锚点                              |

### 4.5.3 location对象的属性

| location对象属性  | 返回值                             |
| ----------------- | ---------------------------------- |
| location.href     | 获取或者设置  整个URL              |
| location.host     | 返回主机（域名）www.itheima.com    |
| location.port     | 返回端口号  如果未写返回 空字符串  |
| location.pathname | 返回路径                           |
| location.search   | 返回参数                           |
| location.hash     | 返回片段 #后面内容 常见于链接 锚点 |

**重点记住：href和search**

#### 4.5.3.1 案例--5秒钟之后自动跳转页面

案例分析

（1）利用定时器做倒计时效果

（2）事件到了，就跳转页面。使用location.href

<script>
    var btn = document.querySelector('button');
    var div = document.querySelector('div');
    var time = 5;
    function indexShow() {
      if (time == 0) {
        location.href = 'http://www.itcast.cn';
        time = 5;
      } else {
        div.innerHTML = '您将在' + time + '秒钟之后跳转到首页';
        time--;
      }
    }
    indexShow();
    setInterval(indexShow, 1000);
  </script>

#### 4.5.3.2 案例--获取URL参数数据

主要练习数据在不同页面中的传递。

案例分析：

（1）第一个登录页面，里面有提交表单，action提交到index.html页面

（2）第二个页面，可以使用第一个页面的参数，这样实现了一个数据不同页面之间的传递效果

（3）第二个页面之所以可以使用第一个页面的数据，是利用了URL里面的location.search参数

（4）在第二个页面中，需要把这个参数提取

（5）第一步去掉 ? 利用substr

（6）第二步 利用=分割 键 和 值 split(‘ = ’)

<script>
    // console.log(location.search);  ?uname=andy
    // 1. 先去掉问号?  substr('起始的位置'，截取几个字符)
    var params = location.search.substr(1);  // uname=andy
    // console.log(params);
    // 2. 利用=把字符串分割为数组 split('=')
    var arr = params.split('=');
    console.log(arr);  // ["uname","andy"]
    var div = document.querySelector('div');
    // 3. 把数据写入div中
    div.innerHTML = arr[1] + '欢迎您';
  </script>

### 4.5.4 location对象的方法

| location对象方法   | 返回值                                                       |
| ------------------ | ------------------------------------------------------------ |
| location.assign()  | 跟href一样，可以跳转页面（也称为重定向页面）                 |
| location.replace() | 替换当前页面，因为不记录历史，所以不能后退页面               |
| location.reload()  | 重新加载页面，相当于刷新按钮或者 f5 如果参数为true强制刷新 ctrl+f5 |

## 4.6 navigator对象

navigator对象包含有关浏览器的信息，它有很多属性，我们最常用的是userAgent，该属性可以返回由客户机发送服务器的user-agent头部的值。

## 4.7 history对象

window对象给我们提供了一个history对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的URL。

| history对象方法 | 作用                                                      |
| --------------- | --------------------------------------------------------- |
| back()          | 可以后退功能                                              |
| forward()       | 前进功能                                                  |
| go(参数)        | 前进后退功能 参数如果是1 前进1个页面 如果是-1 后退1个页面 |

# 5. PC端网页特效

## 5.1 元素偏移量offset系列

### 5.1.1 offset概述

offset翻译过来就是偏移量，我们使用offset系列相关属性可以**动态的**得到该元素的位置（偏移）、大小等。

- 获得元素距离带有定位父元素的位置
- 获得元素自身的大小（宽度高度）
- 注意：返回的数值都不带单位

**offset系列常见属性：**

| offset系列属性       | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.offsetParent | 返回作为该元素带有定位的父级元素 如果父级元素都没有定位则返回body |
| element.offsetTop    | 返回元素相对带有定位父元素上方的偏移                         |
| element.offsetLeft   | 返回元素相对带有定位父元素左边框的偏移                       |
| element.offsetWidth  | 返回自身包括padding、边框、内容区的宽度，返回数值不带单位    |
| element.offsetHeight | 返回自身包括padding、边框、内容区的高度，返回数值不带单位    |

### 5.1.2 offset与style区别

**offset**

- offset可以得到任意样式表中的样式值
- offset系列获得的数值是没有单位的
- offsetWidth包含padding+border+width
- offsetWidth等属性是只读属性，只能获取不能赋值
- **所以，我们想要获取元素大小位置，用offset更合适**

**style**

- style只能得到行内样式表中的样式值
- style.width获得的是带有单位的字符串
- style.width获得不包含padding和border的值
- style.width是可读写属性，可以获取也可以赋值
- **所以，我们想要给元素更改值，则需要用style改变**

#### 5.1.2.1 案例--获取鼠标在盒子内的坐标

案例分析：

（1）我们在盒子内点击，想要得到鼠标距离盒子左右的距离。

（2）首先得到鼠标在页面中的坐标（e.pageX，e.pageY）

（3）其次得到盒子在页面中的距离（box.offsetLeft，box.offsetTop）

（4）用鼠标距离页面的坐标减去盒子在页面中的距离，得到鼠标在盒子内的坐标

（5）如果想要移动一下鼠标，就要获取最新的坐标，使用鼠标移动事件mousemove

<script>
    var box = document.querySelector('.box');
    box.addEventListener('mousemove', function (e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      this.innerHTML = 'x坐标是' + x + 'y坐标是' + y;
    })
  </script>

#### 5.1.2.2 案例--模态框拖拽

弹出框，我们也称为模态框。

1. 点击弹出层，会弹出模态框，并且显示灰色半透明的遮挡层。
2. 点击关闭按钮，可以关闭模态框，并且同时关闭灰色半透明遮挡层。
3. 鼠标放到模态框最上面一行，可以按住鼠标拖拽模态框在页面中移动。
4. 鼠标松开，可以停止拖动模态框移动。

**案例分析：**

（1）点击弹出层，模态框和遮挡层就会显示出来display：block；

（2）点击关闭按钮，模态框和遮挡层就会隐藏起来display：none；

（3）在页面中拖拽的原理：鼠标按下并且移动，之后松开鼠标

（4）触发事件是鼠标按下mousedown，鼠标移动mousemove，鼠标松开mouseup

（5）拖拽过程：鼠标移动过程中，获得最新的值赋值给模态框的left和top值，这样模态框就可以跟着鼠标走了

（6）鼠标按下触发的事件源是最上面一行，就是id为title

（7）鼠标的坐标减去鼠标在盒子内的坐标，才是模态框真正的位置

（8）鼠标按下，我们要得到鼠标在盒子的坐标

（9）鼠标移动，就让模态框的坐标设置为：鼠标坐标减去盒子坐标即可，注意移动事件写在按下事件里面

（10）鼠标松开，就停止拖拽，就是可以让鼠标移动事件解除

<script>
    // 1. 获取元素
    var login = document.querySelector('.login');
    var mask = document.querySelector('.login-bg');
    var link = document.querySelector('#link');
    var closeBtn = document.querySelector('#closeBtn');
    var title = document.querySelector('#title');
    // 2. 点击弹出层这个链接 link 让mask 和 login 显示出来
    link.addEventListener('click', function () {
      mask.style.display = 'block';
      login.style.display = 'block';
    })
    // 3. 点击closeBtn  就隐藏 mask 和 login
    closeBtn.addEventListener('click', function () {
      mask.style.display = 'none';
      login.style.display = 'none';
    })
    // 4. 开始拖拽
    // (1) 当我们鼠标按下，就获得鼠标在盒子内的坐标
    title.addEventListener('mousedown', function (e) {
      var x = e.pageX - login.offsetLeft;
      var y = e.pageY - login.offsetTop;
      // （2）鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
      document.addEventListener('mousemove', move);
      function move(e) {
        login.style.left = e.pageX - x + 'px';
        login.style.top = e.pageY - y + 'px';
      }
      // (3) 鼠标弹起 就让鼠标移动事件移除
      document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', move);
      });
    })
  </script>

#### 5.1.2.3 仿京东放大镜

案例分析：

（1）整个案例可以分为三个功能模块

（2）鼠标经过小图片盒子，黄色的遮挡层和大图片盒子显示，离开隐藏2个盒子功能

- 就是显示与隐藏

（3）黄色的遮挡层跟随鼠标移动功能

- 把鼠标坐标给遮挡层不合适，因为遮挡层坐标以父盒子为准。
- 首先是获得鼠标在盒子内的坐标
- 之后把数值给遮挡层作为left和top值
- 此时用到鼠标移动事件，但是还是在小图片盒子内移动
- 发现，遮挡层位置不对，需要再减去盒子自身高度和宽度的一半
- 遮挡层不能超出小图片盒子范围
- 如果小于零，就把坐标设置为0
- 如果大于遮挡层最大的移动距离，就把坐标设置为最大的移动距离
- 遮挡层的最大移动距离：小图片盒子宽度 减去 遮挡层盒子宽度

（4）移动黄色遮挡层，大图片跟随移动功能

- 求大图片的移动距离公式

  大图片移动距离 = 遮挡层移动距离*大图片最大移动距离/遮挡层最大移动距离

 <script>
    window.addEventListener('load', function () {
      var preview_img = document.querySelector('.preview_img');
      var mask = document.querySelector('.mask');
      var big = document.querySelector('.big');
      // 1. 当我们鼠标经过 preview_img 就显示与隐藏 mask 遮挡层  和  big  大盒子
      preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
      })
    })
    preview_img.addEventListener('mouseout', function () {
      mask.style.display = 'none';
      big.style.display = 'none';
    })
    // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function (e) {
      // (1). 先计算出鼠标在盒子内的坐标
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      // (2). 减去盒子高度 300的一半 是 150 就是mask最终的left和top值
      // (3). mask移动的距离 
      var maskX = x - mask.offsetWidth / 2;
      var maskY = y - mask.offsetHeight / 2;
      // (4). 如果x坐标小于了0就让他停在0的位置
      // 遮挡层的最大移动距离
      var maskMax = preview_img.offsetWidth - mask.offsetWidth;
      if (maskX <= 0) {
        maskX = 0;
      } else if (maskX >= maskMax) {
        maskX = maskMax;
      }
      if (maskY <= 0) {
        maskY = 0;
      } else if (maskY >= maskMax) {
        maskY = maskMax;
      }
      mask.style.left = maskX + 'px';
      mask.style.top = maskY + 'px';
      // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
      // 大图
      var bigImg = document.querySelector('.bigImg');
      // 大图片最大移动距离
      var bigMax = bigImg.offsetWidth - big.offsetWidth;  // 大图片比大盒子大
      // 大图片的移动距离 X Y
      var bigX = maskX * bigMax / maskMax;
      var bigY = maskY * bigMax / maskMax;
      bigImg.style.left = - bigX + 'px';
      bigImg.style.top = - bigY + 'px';
    })
  </script>

## 5.2 元素可视区client系列

**client**翻译过来就是客户端，我们使用client系列的相关属性来获取元素可视区的相关信息。通过client系列的相关属性可以动态的得到该元素的边框大小、元素大小等。

| client系列属性       | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.clientTop    | 返回元素上边框的大小                                         |
| element.clientLeft   | 返回元素左边框的大小                                         |
| element.clientWidth  | 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位 |
| element.clientHeight | 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位 |

### 5.2.1 淘宝flexible.js源码分析

立即执行函数(function()  {}) ()  或者 (function () {} ())

主要作用：创建一个独立的作用域。避免了命名冲突问题

## 5.3 元素滚动scroll系列

### 5.3.1 元素scroll系列属性

scroll**翻译过来就是滚动的，我们使用scroll系列的相关属性可以动态的得到该元素的大小、滚动距离等

| scroll系列属性       | 作用                                           |
| -------------------- | ---------------------------------------------- |
| element.scrollTop    | 返回被卷去的上侧距离，返回数值不带单位         |
| element.scrollLeft   | 返回被卷去的左侧距离，返回数值不带单位         |
| element.scrollWidth  | 返回自身实际的宽度，不含边框，返回数值不带单位 |
| element.scrollHeight | 返回自身实际的高度，不含边框，返回数值不带单位 |

### 5.3.2 页面被卷去的头部

如果浏览器的高(或宽)度不足以显示整个页面时，会自动出现滚动条。当滚动条向下滚动时，页面上面被隐藏掉的高度，我们就称为页面被卷去的头部。滚动条在滚动时会触发onscroll事件。

### 5.3.3 案例--仿淘宝固定右侧侧边栏

1. 原先侧边栏是绝对定位
2. 当页面滚动到一定位置，侧边栏改为固定定位
3. 页面继续滚动，会让返回顶部显示出来

**案例分析：**

（1）需要用到页面滚动事件scroll，因为是页面滚动，所以事件源是document

（2）滚动到某个位置，就是判断页面被卷去的上部值

（3）**页面被卷去的头部：可以通过window.pageYOffset获得，如果是被卷去的左侧window.pageXOffset**

（4）注意：元素被卷去的头部是**element.scrollTop**，如果是页面被卷去的头部则是**window.pageYOffset**

需要注意的是，页面被卷去的头部，有兼容性问题，因此被卷去的头部有如下几种写法：

1. 声明了DTD，使用document.documentElement.scrollTop
2. 未声明DTD，使用document.body.scrollTop
3. 新方法window.pageYOffset和winsow.pageXOffset，IE9开始支持

### 5.3.4 三大系列总结

| 三大系列大小对比    | 作用                                                         |
| ------------------- | ------------------------------------------------------------ |
| element.offsetWidth | 返回自身包括padding、边框、内容区的宽度，返回数值不带单位    |
| element.clientWidth | 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位 |
| element.scrollWidth | 返回自身实际的宽度，不含边框，返回数值不带单位               |

他们主要用法：

1. offset系列经常用于获得元素位置 **offsetLeft  offsetTop**
2. client经常用于获取元素大小 **clientWidth clientHeight**
3. scroll经常用于获取滚动距离 **scrollTop scrollLeft**
4. **注意页面滚动的距离通过** window.pageXOffset  获得

### 5.3.5 mouseenter 和 mouseover的区别

mouseenter鼠标事件

- 当鼠标移动到元素上时就会触发mouseenter事件
- 类似mouseover，它们两者之间的差别是
- mouseover鼠标经过自身盒子会触发，经过子盒子还会触发。mouseenter只会经过自身盒子触发。
- 之所以这样，就是因为mouseenter不会冒泡
- 跟mouseenter搭配鼠标离开 mouseleave 同样不会冒泡

## 5.4 动画函数封装

### 5.4.1 动画实现原理

核心原理：通过定时器setInterval()不断移动盒子位置。

**实现步骤：**

1. 获得盒子当前位置
2. 让盒子在当前位置加上1个移动距离
3. 利用定时器不断重复这个操作
4. 加一个结束定时器的条件
5. 注意此元素需要添加定位，才能使用element.style.left

### 5.4.2 动画函数简单封装

注意函数需要传递2个参数，**动画对象**和**移动到的距离**

### 5.4.3 动画函数给不同元素记录不同定时器

如果多个元素都使用这个动画函数，每次都要var声明定时器。我们可以给不同的元素使用不同的定时器（自己专门用自己的定时器）。

核心原理：利用JS一门动态语言，可以很方便的给当前对象添加属性。

### 5.4.4 缓动效果原理

缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来

思路：

1. 让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。
2. **核心算法：（目标值 - 现在的位置）/ 10   作为每次移动的距离步长**
3. 停止的条件是：让当前盒子位置等于目标位置就停止定时器
4. 注意步长值需要取整

### 5.4.5 动画函数多个目标值之间移动

可以让动画函数从800移动到500。

当我们点击按钮的时候，判断步长是正值还是负值

1. 如果是正值，则步长往大了取整
2. 如果是负值，则步长向小了取整

### 5.4.6 动画函数添加回调函数

**回调函数原理：**函数可以作为一个参数。将这个函数作为参数传到另一个函数里面，当那个函数执行完之后，再执行传进去的这个函数，这个过程就叫做**回调**。

### 5.4.7 动画函数封装到单独JS文件里面

因为以后经常使用这个动画函数，可以单独封装到一个JS文件里面，使用的时候引用这个JS文件即可。

1. 单独新建一个JS文件
2. 将动画函数封装到JS文件中
3. 将JS文件引入html文件中
4. 调用

## 5.5 常见网页特效案例

### 5.5.1 案例--网页轮播图

轮播图也称为焦点图，是网页中比较常见的网页特效。

功能需求：

1. 鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮。

   (1) 因为js文件较多，我们单独新建js文件夹，再新建js文件，引入页面中。

   (2) 此时需要添加load事件。

   (3) 鼠标进过轮播图模块，左右按钮显示，离开隐藏左右按钮。

2. 点击右侧按钮一次，图片往左播放一张，以此类推，左侧按钮同理。

3. 图片播放的同时，下面小圆圈模块跟随一起变化。

4. 点击小圆圈，可以播放相应图片。

5. 鼠标不经过轮播图，轮播图也会自动播放图片。

6. 鼠标经过轮播图模块，自动播放停止。

- 动态生成小圆圈

  核心思路：小圆圈的个数要跟图片张数一致

  所以首先先得到ul里面图片的张数（图片放入li里面，所以就是li的个数）

  利用循环动态生成小圆圈（这个小圆圈要放入ol里面）

  创建节点createElement(‘li’)

  插入节点ol.appendChild(li)

- 小圆圈的排他思想

  点击当前小圆圈，就添加current类

  其余的小圆圈就移除这个current类

  注意：我们在刚才生成小圆圈的同时，就可以直接绑定这个点击事件了

- 点击小圆圈滚动图片

  此时用到animate动画函数，将js文件引入（注意，因为index.js依赖animate.js 所以，animate.js要写到index.js上面）

  使用动画函数的前提，该元素必须有定位

  注意是ul移动 而不是小li

  滚动图片的核心算法：点击某个小圆圈，就让图片滚动  **小圆圈的索引号乘以图片的宽度**作为ul移动的距离

  此时需要知道小圆圈的索引号，我们可以在生成小圆圈的时候，给它设置一个自定义属性，点击的时候获取这个自定义属性即可。

- 点击右侧按钮一次，就让图片滚动一张。

  声明一个变量num，点击一次，自增1，让这个变量乘以图片宽度，就是ul的滚动距离

  **图片无缝滚动原理：**

  把ul第一个li复制一份，放到ul的最后面

  当图片滚动到克隆的最后一张图片时，让ul快速的、不做动画的跳到最左侧：left为0

  同时num赋值为0，可以从新开始滚动图片了

- 克隆第一张图片

  克隆ul第一个li  cloneNode()  加true  深克隆  复制里面的子节点  false  浅克隆

  添加到ul最后面appendChild

- 自动播放

  添加一个定时器

  自动播放轮播图，实际就类似于点击了右侧按钮

  此时我们使用手动调用右侧按钮点击事件  arrow_r.click()

  鼠标经过focus就停止定时器

  鼠标离开focus就开启定时器

### 5.5.2 节流阀

**防止轮播图按钮连续点击造成播放速度过快。**

节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发。

**核心实现思路**：利用回调函数，添加一个变量来控制，锁住函数和解锁函数

开始设置一个变量var flag = true；

if  (flag)  {flag = false;  do something}  关闭水龙头

利用回调函数  动画执行完毕，flag = true  打开水龙头

### 5.5.3 案例--返回顶部

滚动窗口至文档中的特定位置

window.scroll(x,y)

注意，里面的x和y不跟单位，直接写数字

**带有动画的返回顶部**

此时我们可以继续使用我们封装的动画函数

只需要把所有的left相关的值改为 跟 页面垂直滚动距离相关就可以了

页面滚动了多少，可以通过window.pageYoffset得到

### 5.5.4 筋斗云案例

需求：

鼠标经过某个小li，筋斗云跟着到当前小li的位置

鼠标离开这个小li，筋斗云复原为原来的位置

鼠标点击了某个小li，筋斗云就会留在点击这个小li的位置

案例分析

（1）利用动画函数做动画效果

（2）原先筋斗云的起始位置是0

（3）鼠标经过某个小li，把当前小li的offsetLeft位置作为目标值即可

（4）鼠标离开某个小li，就把目标值设为0

（5）如果点击了某个小li，就把li当前的位置存储起来，当鼠标离开，筋斗云就回到这个位置

<script>
        window.addEventListener('load', function() {
            // 1. 获取元素
            var cloud = document.querySelector('.cloud');
            var c_nav = document.querySelector('.c-nav');
            var lis = c_nav.querySelectorAll('li');
            // 2. 给所有的小li绑定事件 
            // 这个current 做为筋斗云的起始位置
            var current = 0;
            for (var i = 0; i < lis.length; i++) {
                // (1) 鼠标经过把当前小li 的位置做为目标值
                lis[i].addEventListener('mouseenter', function() {
                    animate(cloud, this.offsetLeft);
                });
                // (2) 鼠标离开就回到起始的位置 
                lis[i].addEventListener('mouseleave', function() {
                    animate(cloud, current);
                });
                // (3) 当我们鼠标点击，就把当前位置做为目标值
                lis[i].addEventListener('click', function() {
                    current = this.offsetLeft;
                });
            }
        })
    </script>

# 6. 移动端网页特效

## 6.1 触屏事件

### 6.1.1 触屏事件概述

移动端浏览器兼容性较好，我们不需要考虑以前JS的兼容性问题，可以放心的使用原生JS书写效果，但是移动端也有自己独特的地方。比如**触屏事件touch**（也称触摸事件），Android和IOS都有。



touch对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。触屏事件可响应用户手指（或触控笔）对屏幕或者触控板操作。

常见的触屏事件如下：

| 触屏touch事件 | 说明                          |
| ------------- | ----------------------------- |
| touchstart    | 手指触摸到一个DOM元素时触发   |
| touchmove     | 手指在一个DOM元素上滑动时触发 |
| touchend      | 手指从一个DOM元素上移开时触发 |

### 6.1.2 触摸事件对象(TouchEvent)

TouchEvent是一类描述手指在触摸平面（触摸屏、触摸板等）的状态变化的事件。这类事件用于描述一个或多个触点，是开发者可以检测触点的移动，触点的增加和减少，等等

touchstart、touchmove、touchend三个事件都会各自有事件对象。

触摸事件对象重点有三个常见对象列表：

| 触摸列表       | 说明                                             |
| -------------- | ------------------------------------------------ |
| touches        | 正在触摸屏幕的所有手指的一个列表                 |
| targetTouches  | 正在触摸当前DOM元素上的手指的一个列表            |
| changedTouches | 手指状态发生了改变的列表，从无到有，从有到无变化 |

因为平时我们都是给元素注册触摸事件，所以重点记住targetTouches

### 6.1.3 移动端拖动元素

1. touchstart、touchmove、touchend可以实现拖动元素
2. 但是拖动元素需要当前手指的坐标值 我们可以使用 targetTouches[0]里面的pageX和pageY
3. 移动端拖动的原理：手指移动中，计算出手指移动的距离。然后用盒子原来的位置+手指移动的距离
4. 手指的移动距离：手指滑动中的位置 减去 手指刚开始触摸的位置

拖动元素三步曲：

（1）触摸元素touchstart：获取手指初始坐标，同时获得盒子原来的位置

（2）移动手指touchmove：计算手指的滑动问题，并且移动盒子

（3）离开手指touchend：

注意：手指移动也会触发滚动屏幕所以这里要阻止默认的屏幕滚动e.preventDefault();

## 6.2 移动端常见特效

### 6.2.1 案例--移动端轮播图

移动端轮播图功能和基本PC端一致

1. 可以自动播放图片

   （1）开启定时器

   （2）移动端移动，可以使用translate移动

   （3）想要图片优雅的移动，请添加过渡效果

   （4）自动播放功能--无缝滚动：注意，我们判断条件是要等到滚动完毕再去判断，就是过渡完成后判断

   （5）此时需要添加检测过渡完成事件transitioned

   （6）判断条件：如果索引号等于3说明走到最后一张图片，此时索引号要复原为0

   （7）此时图片，去掉过渡效果，然后移动

   （8）如果索引号小于0，说明是倒着走，索引号等于2

   （9）此时图片，去掉过渡效果，然后移动

2. 小圆点跟随变化效果

   （1）把ol里面li带有current类名的选出来去掉类名remove

   （2）让当前索引号的小li加上current  add

   （3）但是，是等着过渡结束之后变化，所以这个写到transitionend事件里面

3. 手指可以拖动播放轮播图

   （1）本质就是ul跟随手指移动，简单说就是移动端拖动元素

   （2）触摸元素touchstart：获取手指初始坐标

   （3）移动手指touchmove：计算手指的滑动距离，并且移动盒子

   （4）离开手指touchend：根据滑动的距离分不同的情况

   （5）如果移动距离小于某个像素 就回弹原来位置

   （6）如果移动距离大于某个像素就上一张下一张滑动

#### 6.2.1.1 classList属性

classList属性是HTML5新增的一个属性，返回元素的类名。但是ie10以上版本支持。

该属性用于在元素中添加，移除及切换CSS类。有以下方法：

添加类：element.classList.add(‘类名’);

移除类：element.classList.remove(‘类名’);

切换类：element.classList.toggle(‘类名’);

### 6.2.2 案例--返回顶部

当页面滚动某个地方，就显示，否则隐藏

（1）事件：scroll页面滚动事件

（2）如果被卷去的头部（window.pageYOffset）大于某个数值

点击可以返回顶部

（1）点击，window.scroll(0,0)返回顶部

### 6.2.3 click延时解决方案

移动端click事件会有300ms的延时，原因是移动端屏幕双击会缩放(double tap to zoom)页面。

解决方案：

1. 禁用缩放。浏览器禁用默认的双击缩放行为并且去掉300ms的点击延迟

   <meta name = “viewport” content=“user-scalable=no”>

   </meta>

2. 封装tap、解决click  300ms  延时

3. 使用插件。fastclick插件解决 300ms延迟

## 6.3 移动端常用开发插件

### 6.3.1 什么是插件

移动端要求的是快速开发，所以我们经常会借助于一些插件来帮我完成操作，那么什么是插件呢？

**JS插件是js文件**，它遵循一定规范编写，方便程序展示效果，拥有特定功能且方便调用。如轮播图和瀑布流插件。

特点：它一般是为了解决某个问题而专门存在，其功能单一，并且比较小

我们以前写的animate.js也算一个最简单的插件

fastclick插件解决300ms延迟

Github官方网址：http://github.com/ftlabs/fastclick

### 6.3.2 插件的使用

1. 引入js插件文件
2. 按照js文件中封装函数的语法格式书写

### 6.3.3 Swiper插件的使用

中文官网地址：http://www.swiper.com.cn/

1. 引入插件相关文件
2. 按照规定语法使用

### 6.3.4 其他移动端常见插件

- superslide：http://www.superslide2.com/
- iscroll：http://github.com/cubiq/iscroll

### 6.3.5 插件的使用总结

1. 确认插件实现的功能
2. 去官网查看使用说明
3. 下载插件
4. 打开demo实例文件，查看需要引入的相关文件，并且引入
5. 复制demo实例文件中的结构html，样式css以及js代码

### 6.3.6 练习--移动端视频插件 zy.media.js

H5给我们提供了video标签，但是浏览器的支持情况不同。

不同的视频格式文件，我们可以通过source解决。

但是外观样式，还有暂停，播放，全屏等功能我们只能自己写代码解决。

这个时候我们可以使用插件方式来制作。

## 6.4 移动端常用开发框架

### 6.4.1 框架概述

框架，顾名思义就是一套架构，它会基于自身的特点向用户提供**一套**较为完整的解决方案。框架的控制权在框架本身，使用者要按照框架所规定的某种规范进行开发。

插件一般是为了解决某个问题而专门存在，其功能单一，并且较小。

前端常用的框架有**Bootstrap、Vue、Angular、React**等。既能开发PC端，也能开发移动端

前端常用的移动插件有**swiper、superslide、iscroll**等。

框架：大而全，一整套解决方案

插件：小而专一，某个功能的解决方案

### 6.4.2 Bootstrap

Bootstrap是一个简洁、直观、强悍的前端开发框架，它让web开发更迅速、简单。

它能开发PC端，也能开发移动端

Bootstrap JS 插件使用步骤：

1. 引入相关文件
2. 复制HTML结构
3. 修改对应样式
4. 修改相应JS参数

# 7. 本地存储

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变得越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，HTML5规范提出了相关解决方案。

**本地存储特性**

1. 数据存储在用户浏览器中
2. 设置、读取方便、甚至页面刷新不丢失数据
3. 容量较大、sessionStorage约5M，localStorage约20M
4. 只能存储字符串，可以将对象JSON.stringify()编码后存储

## 7.1 window.sessionStorage

1. 生命周期为关闭浏览器窗口
2. 在同一个窗口（页面）下数据可以共享
3. 以键值对的形式存储使用

**存储数据：**

sessionStorage.setItem(key,value)

**获取数据：**

sessionStorage.getItem(key)

**删除数据：**

sessionStorage.removeItem(key)

**删除所有数据：**

sessionStorage.clear()

## 7.2 window.localStorage

1. 生命周期永久生效，除非手动删除  否则关闭页面也会存在
2. 可以多窗口（页面）共享（同一浏览器可以共享）
3. 以键值对的形式存储使用

**存储数据：**

localStorage.setItem(key,value)

**获取数据：**

localStorage.getItem(key)

**删除数据：**

localStorage.removeItem(key)

**删除所有数据：**

localStorage.clear()

## 7.3 案例--记住用户名

如果勾选记住用户名，下次用户打开浏览器，就在文本框里面自动显示上次登录的用户名

案例分析

（1）把数据存起来，用到本地存储

（2）关闭页面，也可以显示用户名，所以用到localStorage

（3）打开页面，先判断是否有这个用户名，如果有，就在表单里面显示用户名，并且勾选复选框

（4）当复选框发生改变的时候change事件

（5）如果勾选，就存储，否则就移除

<script>
    var username = document.querySelector('#username');
    var remeber = document.querySelector('#remeber');
    if (localStorage.getItem('username')) {
      username.value = localStorage.getItem('username');
      remeber.checked = true;
    }
    remeber.addEventListener('change', function () {
      if (this.checked) {
        localStorage.setItem('username', username.value);
      } else {
        localStorage.removeItem('username');
      }
    })
  </script>

