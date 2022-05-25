# 1. jQuery 入门

## 1.1 jQuery概述

### 1.1.1 JavaScript库

仓库：可以把很多东西放到这个仓库里面。找东西只需要到仓库里面查找到就可以了。

JavaScript库：即library，是一个**封装**好的特定的**集合**（方法和函数）。从封装一大堆函数的角度理解库，就是在这个库中，封装了很多预先定义好的函数在里面，比如动画animate、hide、show，比如获取元素等。

简单理解：就是一个JS文件，里面对我们原生js代码进行了封装，存放到里面。这样我们可以快速高效的使用这些封装好的功能了。

比如jQuery，就是为了快速方便的操作DOM，里面基本都是函数（方法）。

**常见的JavaScript库**

- jQuery
- Prototype
- YUI
- Dojo
- Ext JS
- 移动端的zepto

这些库都是对原生JavaScript的封装，**内部都是用JavaScript实现的**，我们主要学习的是**jQuery**。

### 1.1.2 jQuery的概念

jQuery是一个快速、简洁的JavaScript库，其设计的宗旨是“write Less，Do more”，即倡导写更少的代码，做更多的事情。

j就是JavaScript；Query查询；意思就是查询js，把js中的DOM操作做了封装，我们可以快速的查询使用里面的功能。

jQuery封装了JavaScript常用的功能代码，优化了DOM操作、事件处理、动画设计和Ajax交互。

学习jQuery本质：就是学习调用这些函数（方法）。

jQuery出现的目的是加快前端人员的开发速度，我们可以非常方便的调用和使用它，从而提高开发效率。

### 1.1.3 jQuery的优点

- 轻量级。核心文件才几十KB，不会影响页面加载速度。
- 跨浏览器兼容。基本兼容了现在主流的浏览器。
- **链式编程、隐式迭代**
- 对事件、样式、动画支持，大大简化了DOM操作
- 支持插件扩展开发。有着丰富的第三方插件，例如：树形菜单、日期控件、轮播图等
- 免费、开源

## 1.2 jQuery的基本使用

### 1.2.1 jQuery的下载

官网地址：https://jquery.com/

各个版本的下载：https://code.jquery.com/

### 1.2.2 jQuery的使用步骤

1. 引入jQuery文件
2. 使用即可

### 1.2.3 jQuery的入口函数

语法1：

$ (function () {

​	...   // 此处是页面DOM加载完成的入口

})；

语法2：

$(document).ready(function() {

​	...  // 此处是页面DOM加载完成的入口

})

1. 等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完毕，jQuery帮我们完成了封装。
2. 相当于原生js中的DOMContentLoaded。
3. 不同于原生js中的load事件是等页面文档、外部的js文件、css文件、图片加载完毕才执行内部代码。
4. 更推荐使用语法1

### 1.2.4 jQuery的顶级对象$

1. $是jQuery的别称，在代码中可以使用jQuery代替$，但一般为了方便，通常都直接使用$。
2. $是jQuery的顶级对象，相当于原生JavaScript中的window。把元素利用$包装成jQuery对象，就可以调用jQuery的方法。

### 1.2.5 jQuery对象和DOM对象

1. 用原生JS获取来的对象就是DOM对象
2. jQuery方法获取的元素就是jQuery对象
3. **jQuery对象本质是：利用$对DOM对象包装后产生的对象**（伪数组形式存储）

**DOM对象与jQuery对象之间是可以相互转换的**。

因为原生js比jQuery更大，原生的一些属性和方法jQuery没有给我们封装。要想使用这些属性和方法需要把jQuery对象转换为DOM对象才能使用。

1. DOM对象转换为jQuery对象：**$(DOM对象)**

   （1）获取jQuery对象

   语法：$(‘div’);

   （2）jQuery对象转换为DOM对象（两种方式）

   - **$(‘div’)[index]    index是索引号**
   - **$(‘div’).get(index)    index是索引号**

# 2. jQuery 常用API

## 2.1 jQuery选择器

### 2.1.1 jQuery基础选择器

原生JS获取元素方式很多，很杂，而且兼容性情况不一致，因此jQuery给我们做了封装，使获取元素统一标准。

$(“选择器”)     // 里面选择器直接写css选择器即可，但是要加引号

| 名称       | 用法            | 描述                     |
| ---------- | --------------- | ------------------------ |
| ID选择器   | $(“#id”)        | 获取指定ID的元素         |
| 全选选择器 | $(‘*’)          | 匹配所有元素             |
| 类选择器   | $(“.class”)     | 获取同一类class的元素    |
| 标签选择器 | $(“div”)        | 获取同一类标签的所有元素 |
| 并集选择器 | $(“div,p,li”)   | 选取多个元素             |
| 交集选择器 | $(“li.current”) | 交集元素                 |

### 2.1.2 jQuery层级选择器

| 名称       | 用法         | 描述                                                         |
| ---------- | ------------ | ------------------------------------------------------------ |
| 子代选择器 | $(“ul>li”);  | 使用>号，获取亲儿子层级的元素；注意：并不会获取孙子层级的元素 |
| 后代选择器 | $(“ul  li”); | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等   |

**知识铺垫**

jQuery设置样式

**语法：**$(‘div’).css(‘属性’，‘值’)

### 2.1.3 隐式迭代（重要）

遍历内部DOM元素（伪数组形式存储）的过程就叫做**隐式迭代**。

简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，方便我们调用。

### 2.1.4 jQuery筛选选择器

| 语法       | 用法          | 描述                                                      |
| ---------- | ------------- | --------------------------------------------------------- |
| :first     | $(‘li:first’) | 获取第一个li元素                                          |
| :last      | $(‘li:last’)  | 获取最后一个li元素                                        |
| :eq(index) | $(“li:eq(2)”) | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始 |
| :odd       | $(“li:odd”)   | 获取到的li元素中，选择索引号为奇数的元素                  |
| :even      | $(“li:even”)  | 获取到的li元素中，选择索引号为偶数的元素                  |

### 2.1.5 jQuery筛选方法（重点）

| 语法               | 用法                           | 说明                                                   |
| ------------------ | ------------------------------ | ------------------------------------------------------ |
| parent()           | $(“li”).parent()；             | 查找父级                                               |
| children(selector) | $(“ul”).children(“li”)         | 相当于$(“ul>li”),最近一级（亲儿子）                    |
| find(selector)     | $(“ul”).find(“li”);            | 相当于$(“ul li”),后代选择器                            |
| siblings(selector) | $(“.first”).siblings(“li”);    | 查找兄弟节点，不包括自己本身                           |
| nextAll([expr])    | $(“.first”).nextAll()          | 查找当前元素之后所有的同辈元素                         |
| prevAll([expr])    | $(“.last”).prevAll()           | 查找当前元素之前所有的同辈元素                         |
| hasClass(class)    | $(‘div’).hasClass(“protected”) | 检查当前的元素是否含有某个特定的类，如果有，则返回true |
| eq(index)          | $(“li”).eq(2);                 | 相当于$(“li:eq(2)”),index从0开始                       |

重点记住：parent() children() find() siblings() eq()

### 2.1.6 jQuery里面的排他思想

想要多选一的效果，排他思想：当前元素设置样式，其余的兄弟元素清除样式。

<script>
    $(function () {
      // 1. 隐式迭代 给所有的按钮都绑定了点击事件
      $("button").click(function () {
        // 2.当前的元素变化背景颜色
        $(this).css("background", "pink");
        // 3. 其余的兄弟去掉背景颜色
        $(this).siblings("button").css("background", "");
      })
    })
  </script>

### 2.1.7 淘宝服饰精品案例

（1）核心原理：鼠标经过左侧盒子某个小li，就让内容区盒子相对应图片显示，其余的图片隐藏。

（2）需要得到当前小li的索引号，就可以显示对应索引号的图片

（3）jQuery得到当前元素索引号**$(this).index()**

（4）中间对应的图片，可以通过eq(index)方法去选择

（5）显示元素show()  隐藏元素hide()

<script>
    $(function () {
      // 1. 鼠标经过左侧的小li
      $("#left li").mouseover(function () {
        // 2. 得到当前小li的索引号
        var index = $(this).index();
        console.log(index);
        // 3. 让我们右侧的盒子相应索引号的图片显示出来就好了
        $("#content div").eq(index).show();
        // 4. 让其余的图片（就是其他的兄弟）隐藏起来
        $("#content div").eq(index).siblings("div").hide();
      })
    })
  </script>

### 2.1.8 链式编程

连式编程是为了节省代码量，看起来更优雅。

**例如：**

**$(this).css(‘color’,‘red’).siblings().css(‘color’,‘’);**

**使用链式编程一定注意是哪个对象执行样式。**

## 2.2 jQuery样式操作

### 2.2.1 操作css方法

jQuery可以使用css方法来修改简单元素样式；也可以操作类，修改多个样式。

1. 参数只写属性名，则是返回属性值

   $(this).css(“color”);

2. 参数是**属性名，属性值，逗号分离，**是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号

   $(this).css(“color”,“red”);

3. 参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开，属性可以不用加引号

   $(this).css({“color”: “white”, “fontSize”: “20px”});

### 2.2.2 设置类样式方法

作用等同于以前的classList，可以操作类样式，注意操作类里面的参数不要加点。

1. 添加类

   $(“div”).addClass(“current”);

2. 移除类

   $(“div”).removeClass(“current”);

3. 切换类

   $(“div”).toggleClass(“current”);

### 2.2.3 案例--tab栏切换

（1）点击上部的li，当前li添加current类，其余兄弟移除类。

（2）点击的同时，得到当前li的索引号

（3）让下部里面相应索引号的item显示，其余的item隐藏

<script>
    $(function () {
      $("ul li").click(function () {
        $(this).addClass("current").siblings("li").removeClass("current");
        var index = $(this).index();
        $(".tab_con div").eq(index).show().siblings("div").hide();
      })
    })
  </script>

### 2.2.4 类操作与className区别

原生JS中className会覆盖元素原先里面的类名。

jQuery里面类操作只是对**指定类**进行操作，不影响原先的类名。

## 2.3 jQuery效果

jQuery给我们封装了很多动画效果，最为常见的如下：

- 显示隐藏效果

  **show()**

  **语法：**show([speed,[easing],[fn]])

  **hide()**

  **语法：**show([speed,[easing],[fn]])

  **toggle()**切换

  **语法：**toggle([speed,[easing],[fn]])

  **参数：**

  （1）参数都可以省略，无动画直接显示

  （2）speed：三种预定速度之一的字符串(“slow”，“normal”，“fast”)或表示动画时长的毫秒数值(如：1000)

  （3）easing：(Optional)用来指定切换效果，默认是“swing”，可用参数“linear”

  （4）fn：回调函数，在动画完成时执行的函数，每个元素执行一次

  （5）一般情况下，我们都不加参数直接显示隐藏就可以了

- 滑动效果

  **slideDown()**

  语法：slideDown([speed,[easing],[fn]])

  **slideUp()**

  语法：slideUp([speed,[easing],[fn]])

  **slideToggle()**

  语法：slideToggle([speed,[easing],[fn]])

  **参数：**

  （1）参数都可以省略，无动画直接显示

  （2）speed：三种预定速度之一的字符串(“slow”，“normal”，“fast”)或表示动画时长的毫秒数值(如：1000)

  （3）easing：(Optional)用来指定切换效果，默认是“swing”，可用参数“linear”

  （4）fn：回调函数，在动画完成时执行的函数，每个元素执行一次

  （5）一般情况下，我们都不加参数直接显示隐藏就可以了

- 淡入淡出效果

  fadeIn()

  语法：fadeIn([speed,[easing],[fn]])

  fadeOut()

  语法：fadeOut([speed,[easing],[fn]])

  fadeToggle()

  语法：fadeToggle([speed,[easing],[fn]])

  fadeTo() 渐进方式调整到指定的不透明度

  **语法：fadeTo([speed,opacity,[easing],[fn]])**

  参数：

  （1）**opacity透明度必须写，取值0~1之间。**

  （2）**speed：**(“slow”，“normal”，“fast”)或表示动画时长的毫秒数值(如：1000)。**必须写**

  **（3）easing：(Optional)用来指定切换效果，默认是“swing”，可用参数“linear”**

  （4）fn：回调函数，在动画完成时执行的函数，每个元素执行一次

- 自定义动画

  animate()

  语法：animate(params, [speed], [easing], [fn])

  参数：

  （1）**params：想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采取驼峰命名法borderLeft。**其余参数都可以省略。

### 2.3.1 动画队列及其停止排队方法

1. 动画或效果队列

   动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行。

2. 停止排队

   stop()

   （1）stop()方法用于停止动画或效果。

   （2）注意：stop()写到动画或者效果的**前面，相当于停止上一次的动画。**

### 2.3.2 案例--王者荣耀手风琴效果分析

（1）鼠标经过某个小li有两步操作：

（2）当前小li宽度变为224px，小图片淡出，大图片淡入

（3）其余兄弟小li宽度变为69px，小图片淡入，大图片淡出

<script>
    $(function () {
      // 鼠标经过某个小li有两步操作：
      $(".king li").mouseenter(function () {
        // 1. 当前小li 宽度变为224px，同时里面的小图片淡出，大图片淡入
        $(this).stop().animate({
          width: 224
        }).find(".small").stop().fadeOut().siblings(".big").stop().fadeIn();
        // 2. 其余兄弟小li宽度变为69px， 小图片淡入，大图片淡出
        $(this).siblings("li").stop().animate({
          width: 69
        }).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
      })
    })
  </script>

## 2.4 jQuery属性操作

### 2.4.1 设置或获取元素固有属性值prop()

所谓元素固有属性就是元素本身自带的属性，比如<a>元素里面的href，比如<input>元素里面的type。

1. 获取属性语法

   prop(‘属性’)；

2. 设置属性语法

   prop(“属性”，“属性值”)

### 2.4.2 设置或获取元素自定义属性值 attr()

用户自己给元素添加的属性，我们称为自定义属性。比如给div添加index=“1”

1. 获取属性语法

   attr(“属性”)      // 类似原生 getAttribute()

   该方法也可以获取H5自定义属性

2. 设置属性语法

   attr(“属性”，“属性值”)  // 类似原生setAttribute()

### 2.4.3 数据缓存data()

data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构。一旦页面刷新，之前存放的数据都将被移除。

1. 附加的数据语法

   data(“name”,“value”)   // 向被选元素附加数据

2. 获取数据语法

   data(“name”);    // 向被选元素获取数据

   同时，还可以读取HTML5自定义属性 data-index，得到的是数字型

   *// 这个方法获取data-index h5自定义属性 第一个 不用写data-  而且返回的是数字型*

      console.log($("div").data("index"));

### 2.4.4 案例--购物车案例模块-全选

（1）全选思路：里面3个小的复选框按钮(j-checkbox)选中状态(checked)跟着全选按钮(checkall)走。

（2）因为checked是复选框的固有属性，此时我们需要利用prop()方法获取和设置该属性。

（3）把全选按钮状态赋值给3个小复选框就可以了。

（4）当我们每次点击小的复选框按钮，就来判断：

（5）如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。

**（6）:checked  选择器  :checked查找被选中的表单元素**

<script> 
   $(function () {
  // 1. 全选 全不选功能模块
  // 就是把全选按钮(checkall)的状态赋值给 三个小的按钮(j-checkbox)就可以了
  // 事件可以使用change
  $(".checkall").change(function () {
    // console.log($(this).prop("checked"))
    $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"))
  })
  // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
  $(".j-checkbox").change(function () {
    /* if (被选中的小复选框的个数 === 3) {
            就要选中全选按钮
        } else {
            不要选中全选按钮
        } */
    // console.log($(".j-checkbox:checked").length)
    // $(".j-checkbox").length  这个是所有的小复选框的个数
    if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
      $(".checkall").prop("checked", true)
    } else {
      $(".checkall").prop("checked", false)
    }
  })
})
  </script>



### 2.4.5 案例--购物车案例模块-增减商品数量

（1）核心思路：首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框

（2）注意1：只能增加本商品的数量，就是当前+号的兄弟文本框（itxt）的值。

（3）修改表单的值是val()方法

（4）注意2：这个变量初始值应该是这个文本框的值，在这个值的基础上++。要获取表单的值

<script> 
   $(function () {
   // 3. 增加商品数量模块 首先声明一个变量，当我们点击+号 （increment），就让这个值++，然后赋值给文本框
  $(".increment").click(function () {
    // 得到当前兄弟文本框的值
    var n = $(this).siblings(".itxt").val()
    // console.log(n)
    n++
    $(this).siblings(".itxt").val(n)
  })
  $(".decrement").click(function () {
    // 得到当前兄弟文本框的值
    var n = $(this).siblings(".itxt").val()
    if (n == 1) {
      return false
    }
    // console.log(n)
    n--
    $(this).siblings(".itxt").val(n)
  })
})
  </script>

### 2.4.6 案例：购物车案例模块-修改商品小计

（1）核心思路：每次点击+号或者-号，根据文本框的值乘以 当前商品的价格 就是商品的小计

（2）注意1：只能增加本商品的小计，就是当前商品的小计模块（p-sum)

（3）修改普通元素的内容是text()方法

（4）注意2：当前商品的价格，要把￥符号去掉再相乘 截取字符串substr(1)

（5）**parents(‘选择器’)可以返回指定祖先元素**

（6）最后计算的结果如果想要保留2位小数 通过toFixed(2)方法

（7）用户也可以直接修改表单里面的值，同样需要计算小计。用表单change事件

（8）用最新的表单内的值 乘以 单价即可 但是还是当前商品小计

## 2.5 jQuery内容文本值

主要针对元素的内容还有表单的值操作。

1. **普通元素内容html()（相当于原生inner HTML）**

   html()   // 获取元素的内容

   html(“内容”)  // 设置元素的内容

2. **普通元素文本内容text()   (相当于原生inner Text)**

   text()    // 获取元素的文本内容

   text(“文本内容”)  // 设置元素的文本内容

3. **表单的值val()   （相当于原生value）**

   val()   // 获取表单的内容

   val(“文本内容”)    // 设置表单的内容

## 2.6 jQuery元素操作

主要是遍历、创建、添加、删除元素操作。

### 2.6.1 遍历元素

jQuery**隐式迭代**是对同一类元素做了**同样的操作**。如果想要给同一类元素**做不同的操作**，就需要用到**遍历**。

**语法1：**

$(“div”).each(function(index, domEle) {xxx;} )

1. each()方法遍历匹配每一个元素。主要用DOM处理。each每一个
2. 里面的回调函数有2个参数：index是每个元素的索引号；domEle是每个**DOM元素对象，不是jquery对象**
3. **所以要想使用jquery方法，需要给这个dom元素转换为jquery对象 $(domEle)**

**语法2：**

$.each(object, function (index, element) {xxx;} )

1. $.each()方法可用于遍历任何对象。主要用于数据处理，比如数组，对象
2. 里面的函数有2个参数：index是每个元素的索引号，element遍历内容

### 2.6.1.1 案例：购物车案例模块-计算总计和总额

(1) 核心思路：把所有文本框里面的值相加就是总计数量。总额同理

(2) 文本框里面的值不相同，如果想要相加需要用到each遍历。声明一个变量，相加即可。

(3) 点击+号-号，会改变总计和总额，如果用户修改了文本框里面的值同样会改变总计和总额。

(4) 因此可以封装一个函数求总计和总额的，以上2个操作调用这个函数即可。

(5) 注意1：总计是文本框里面的值相加用val()   总额是普通元素的内容用text()

(6) 注意2：要注意普通元素里面的内容要去掉￥并且转换为数字型才能相加

### 2.6.2 创建元素

语法：

$(“<li> </li>”);

动态的创建了一个<li>

### 2.6.3 添加元素

1. 内部添加

   element.append(“内容”)

   把内容放入匹配元素内部最后面，类似原生appendChild。

   element.prepend(“内容”)

   把内容放到匹配元素内部最前面

2. 外部添加

   element.after(“内容”)   // 把内容放入目标元素后面

   element.before(“内容”)   // 把内容放入目标元素前面

   注意：内部添加元素，生成之后，它们是父子关系

   ​			外部添加元素，生成之后，它们是兄弟关系

3. 删除元素

   element.remove()   // 删除匹配的元素（本身）

   element.empty()     // 删除匹配的元素集合中所有的子节点

   element.html(“”)     // 清空匹配的元素内容

#### 2.6.3.1 购物车案例模块--删除商品模块

(1) 核心思路：把商品remove()删除元素即可

(2) 有三个地方需要删除：1. 商品后面的删除按钮  2. 删除选中的商品  3. 清理购物车

(3) 商品后面的删除按钮：一定是删除当前的商品，所以从$(this)出发

(4) 删除选中的商品：先判断小的复选框按钮是否选中状态，如果是选中，则删除对应的商品

 <script>
        $(".p-action a").click(function () {
            // 删除的是当前的商品
            $(this).parents(".cart-item").remove()
            getSum()
        })
        // (2) 删除选中的商品
        $(".remove-batch").click(function () {
            // 删除的是小的复选框选中的商品
            $(".j-checkbox:checked").parents(".cart-item").remove()
            getSum()
        })
        // (3) 清空购物车 删除全部商品
        $(".clear-all").click(function () {
            $(".cart-item").remove()
            getSum()
        })
    </script>

#### 2.6.3.2 购物车案例模块--选中商品添加背景

(1) 核心思路：选中的商品添加背景，不选中移除背景即可。

(2) 全选按钮点击：如果全选是选中的，则所有的商品添加背景，否则移除背景

(3) 小的复选框点击：如果是选中状态，则当前商品添加背景，否则移除背景

(4) 这个背景，可以通过类名修改，添加类和删除类。

## 2.7 jQuery尺寸、位置操作

### 2.7.1 jQuery尺寸

| 语法                                 | 用法                                                 |
| ------------------------------------ | ---------------------------------------------------- |
| width()  /  height()                 | 取得匹配元素宽度和高度值 只算width/height            |
| innerWidth() / innerHeight()         | 取得匹配元素宽度和高度值 包含padding                 |
| outerWidth() / outerHeight()         | 取得匹配元素宽度和高度值 包含padding、border         |
| outerWidth(true) / outerHeught(true) | 取得匹配元素宽度和高度值 包含padding、border、margin |

- 以上参数为空，则是获取相应值，返回的是数字型
- 如果参数为数字，则是修改相应值
- 参数可以不必写单位

### 2.7.2 jQuery位置

位置主要有三个：offset()、position()、scrollTop() / scrollLeft()

- offset()

1. offset()设置或获取元素偏移

   offset()方法设置或返回被选中元素相对于文档的偏移坐标，跟父级没有关系。

2. 该方法有2个属性left、top。offset().top 用于获取距离文档顶部的距离，offset().left用于获取距离文档左侧的距离。

3. 可以设置元素的偏移：offset({top: 10, left: 30});

- position()

1. position()获取元素偏移

   position()方法用于返回被选元素相对于**带有定位的父级**偏移坐标，如果父级都没有定位，则以文档为准。

2. 只可以获取不可以设置元素的偏移

- scrollTop() / scrollLeft()设置或获取元素被卷去的头部和左侧

1. scrollTop()方法设置或返回被选元素被卷去的头部
2. 可以设置被选元素被卷去头部的距离

#### 2.7.2.1 案例--带有动画的返回顶部

(1) 核心原理：使用animate动画返回顶部

(2) animate动画函数里面有个scrollTop属性，可以设置位置

(3) 但是是元素做动画，因此$(“body,html”).animate({scrollTop: 0}); 不能是文档而是 html和body元素做动画

<script>
    $(function () {
      // 被卷去的头部 scrollTop()  /  被卷去的左侧  scrollLeft()
      // 页面滚动事件
      var boxTop = $(".container").offset().top;
      $(window).scroll(function () {
        // console.log($(document).scrollTop());
        if ($(document).scrollTop() >= boxTop) {
          $(".back").fadeIn();
        } else {
          $(".back").fadeOut();
        };
        $(".back").click(function () {
          // $(document).scrollTop(0);
          $("body,html").stop().animate({
            scrollTop: 0
          });
        })
      })
    })
  </script>

#### 2.7.2.2 案例--品优购电梯导航

(1) 当我们滚动到 今日推荐 模块，就让电梯导航显示出来

(2) 点击电梯导航页面可以滚动到相应内容区域

(3) 核心算法：因为电梯导航模块和内容区模块一一对应的

(4) 当我们点击电梯导航某个小模块，就可以拿到当前小模块的索引号

(5) 就可以把animate要移动的距离求出来：当前索引号内容区模块它的offset().top

(6) 然后执行动画即可

(7) 当我们点击电梯导航某个小li，当前小li添加current类，兄弟移除类名

(8) 当我们页面滚动到内容区域某个模块，左侧电梯导航，相对应的小li模块，也会添加current类，兄弟移除current类

(9) 触发的事件是页面滚动，因此这个功能要写到页面滚动事件里面。

(10) 需要用到each，遍历内容区域大模块。each里面能拿到内容区域每一个模块元素和索引号

(11) 判断的条件：被卷去的头部大于等于内容区域里面每个模块的offset().top

(12) 就利用这个索引号找到相应的电梯导航小li添加类

# 3. jQuery事件

## 3.1 jQuery事件注册

单个事件注册

语法：

element.事件(function() {})

$(“div”).click(function() {事件处理程序})

其他事件和原生基本一致。

比如mouseover、mouseout、blur、focus、change、keydown、keyup、resize、scroll等

## 3.2 jQuery事件处理

### 3.2.1 事件处理on()绑定事件

on()方法在匹配元素上绑定一个或多个事件的事件处理函数

**语法：**

element.on(events, [selector], fn)

1. events: 一个或多个用空格分隔的事件类型，如“click”或“keydown”。
2. selector：元素的子元素选择器
3. fn：回调函数 即绑定在元素身上的侦听函数

**on() 方法优势1：**

可以绑定多个事件，多个处理事件处理程序。

**on()方法优势2：**

可以事件委派操作。事件委派的定义就是，把原来加给子元素身上的事件绑定在父元素身上，就是把事件委派给父元素。

在此之前有bind()，live(),delegate()等方法来处理事件绑定或者事件委派，最新版本的请用**on**代替他们。

**on()方法优势3：**

动态创建的元素，click()没有办法绑定事件，on()可以给动态生成的元素绑定事件。

#### 3.2.1.1 案例--发布微博案例

（1）点击发布按钮，动态创建一个小li，放入文本框中的内容和删除按钮，并且添加到ul中

   (2)   点击删除按钮，可以删除当前的微博留言

### 3.2.2 事件处理off()解绑事件

off()方法可以移除通过on方法添加的事件处理程序。

$(“p”).off()   // 解绑p元素所有事件处理程序

$(“p”).off(“click”)   // 解绑p元素上面的点击事件 后面的click是侦听函数名

$(“p”).off(“click”,“li”);   // 解绑事件委托



**如果有的事件只想触发一次，可以使用one()来绑定事件。**

### 3.2.3 自动触发事件trigger()

有些事件希望自动触发，比如轮播图自动播放功能跟点击右侧按钮一致。可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发。

element.click()   // 第一种简写形式

element.trigger(“type”)   // 第二种自动触发模式

element.triggerHandler(“type”)   // 第三种自动触发模式

## 3.3 jQuery事件对象

事件被触发，就会有事件对象的产生。

element.on(events,[selector],function(event) {})

阻止默认行为：event.preventDefault() 或者 return false

阻止冒泡：event.stopPropagation()

# 4. jQuery其他方法

## 4.1 jQuery拷贝对象

如果想要把某个对象拷贝（合并)给另外一个对象使用，此时可以使用$.extend()方法

语法：

$.extend([deep],target,object1,[objectN])

1. deep: 如果设为true为深拷贝，默认为false浅拷贝
2. target：要拷贝的目标对象
3. object1：待拷贝到第一个对象的对象
4. objectN：待拷贝到第N个对象的对象。
5. 浅拷贝是把被拷贝的对象**复杂数据类型中的地址**拷贝给目标对象，修改目标对象**会影响**被拷贝对象。
6. 深拷贝，前面加true，完全克隆（拷贝的对象，而不是地址），修改目标对象**不会影响**被拷贝对象

## 4.2 多库共存

问题概述：

jQuery使用$作为标识符，随着jQuery的流行，其他js库也会用这$作为标识符，这样一起使用会引起冲突

客观需求：

需要一个解决方案，让jQuery和其他的库不存在冲突，可以同时存在，这就叫做多库共存

jQuery解决方案：

1. 把里面的$符号统一改为jQuery。比如jQuery(“div”)
2. jQuery变量规定新的名称：$.noConflict()    var xx = $.noConflict()

## 4.3 jQuery插件

jQuery功能比较有限，想要更复杂的特效效果，可以借助于jQuery插件完成。

注意：这些插件也是依赖于jQuery来完成的，所以必须要先引入jQuery文件，因此也称为jQuery插件。

**jQuery插件常用的网站：**

1. jQuery插件库 http://www.jq22.com/
2. jQuery之家 http://www.htmleaf.com/

**jQuery插件使用步骤：**

1. 引入相关文件。（jQuery文件和插件文件）
2. 复制相关html、css、js（调用插件）。

**jQuery插件演示：**

1. 瀑布流

2. 图片懒加载（图片使用延迟加载在可提高网页下载速度。它也能帮助减轻服务器负载）

   当我们页面滑动到可视区域，再显示图片。

   我们使用jquery插件库 EasyLazyload。注意：此时的js引入文件和js调用必须写到DOM元素(图片)最后面。

3. 全屏滚动(fullpage.js)

   github：https://github.com/alvarotrigo/fullPage.js

   中文翻译网站：http://www.dowebok.com/demo/2014/77/

**bootstrap JS插件：**

bootstrap框架也是依赖于jQuery开发的，因此里面的js插件使用，也必须引入jQuery文件。

### 4.3.1 案例--toDoList

（1）文本框里面输入内容，按下回车，就可以生成待办事项

（2）点击待办事项复选框，就可以把当前数据添加到已完成事项里面

（3）点击已完成事项复选框，就可以把当前数据添加到待办事项里面

（4）**但是本页面内容刷新页面不会丢失**

刷新页面不会丢失数据，因此需要用到本地存储localStorage

**核心思路：不管按下回车，还是点击复选框，都是把本地存储的数据加载到页面中，这样保证刷新关闭页面不会丢失数据**

存储的数据格式：var todolist = [{title：‘xxx’, done：false}]

注意点1：本地存储localStorage里面只能存储字符串格式，因此需要把对象转换为字符串JSON.stringify(data)。

注意点2：获取本地存储数据，需要把里面的字符串转换为对象格式JSON.parse()才能使用里面的数据

### 4.3.2 案例--toDoList按下回车把新数据添加到本地存储里面

（1）切记：页面中的数据，都要从本地存储里面获取，这样刷新页面不会丢失数据，所以先要把数据保存到本地存储里面。

（2）利用事件对象.keyCode判断用户按下回车键(13)。

（3）声明一个数组，保存数据。

（4）先要读取本地存储原来的数据（声明函数getDate()，放到这个数组里面）。

（5）之后把最新从表单获取过来的数据，追加到数组里面。

（6）最后把数组存储给本地存储（声明函数savaDate()）

### 4.3.3 案例--toDoList本地存储数据渲染加载到页面

（1）因为后面也会经常渲染加载操作，所以声明一个函数load，方便后面调用

（2）先要读取本地存储数据。（数据不要忘记转换为对象格式）

（3）之后遍历这个数据($.each())，有几条数据，就生成几个小li添加到ol里面。

（4）每次渲染之前，先把原先里面ol的**内容**清空，然后渲染加载最新的数据。

### 4.3.4 案例--toDoList删除操作

（1）点击里面的a链接，不是删除li，而是删除本地存储对应的数据。

（2）**核心原理：先获取本地存储数据，删除对应的数据，保存给本地存储，重新渲染列表li**

（3）我们可以给链接自定义属性记录当前的索引号

（4）根据这个索引号删除相关的数据----数组的splice(i,1)方法

（5）存储修改后的数据，然后存储给本地存储

（6）重新渲染加载数据列表

（7）因为a是动态创建的，我们使用on方法绑定事件

### 4.3.5 案例--toDOlist正在进行和已完成选项操作

（1）当我们点击了小的复选框，修改本地存储数据，再重新渲染数据列表。

（2）点击之后，获取本地存储数据。

（3）修改对应数据属性done为当前复选框的checked状态。

（4）之后保存数据到本地存储

（5）重新渲染加载数据列表

（6）load加载函数里面，新增一个条件，如果当前数据的done为true就是已完成的，就把列表渲染加载到ul里面

（7）如果当前数据的done为false，则是待办事项，就把列表渲染加载到ol里面

### 4.3.6 案例--toDoList统计正在进行个数和已经完成个数

（1）在我们load函数里面操作

（2）声明2个变量：todoCount待办个数 doneCount已完成个数

（3）当进行遍历本地存储数据的时候，如果数据done为false，则todoCount++，否则doneCount++

（4）最后修改相应的元素text()