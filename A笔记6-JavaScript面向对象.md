# 1. JS面向对象

## 1.1 面向对象编程介绍

- **面向过程编程POP(Process-oriented programming)**

  面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了。

  eg：将大象装进冰箱，面向过程做法。

  1. 打开冰箱  2. 大象装进去  3. 关上冰箱门

  **面向过程，就是按照我们分析好了的步骤，按照步骤解决问题。**

- **面向对象OOP(Object oriented programming)**

  **面向对象**是把事务分解成一个个对象，然后由对象之间分工与合作。

  eg：将大象装进冰箱，面向对象做法。

  先找出对象，并写出这些对象的功能：

  1. 大象对象
     - 进去
  2. 冰箱对象
     - 打开
     - 关闭
  3. 使用大象和冰箱的功能

  **面向对象是以对象功能来划分问题，而不是步骤。**

  在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工。

  面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多人合作的大型软件项目。

  面向对象的特性：

  - 封装性
  - 继承性
  - 多态性

- 面向过程和面向对象的对比

  面向过程：

  优点：性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程。

  缺点：没有面向对象易维护、易复用、易扩展

  面向对象：

  优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统更加灵活、更加易于维护

  缺点：性能比面向过程低

  用面向过程的方法写出来的程序是一份蛋炒饭，而用面向对象写出来的程序是一份盖浇饭。

## 1.2 ES6中的类和对象

面向对象更贴近我们的实际生活，可以使用面向对象描述现实世界事物。但是事物分为具体的事物和抽象的事物

抽象的(泛指的)

具体的(特指的)

**面向对象的思维特点：**

1. 抽取(抽象)对象共用的属性和行为组织(封装)成一个类(模板)
2. 对类进行实例化，获取类的对象

面向对象编程我们考虑的是有哪些对象，按照面向对象的思维特点，不断的创建对象，使用对象，指挥对象做事情。

### 1.2.1 对象

现实生活中：万物皆对象，对象是**一个具体的事物**，看得见摸得着的实物。例如，一本书、一辆汽车、一个人可以是“对象”，一个数据库、一张网页、一个远程服务器的连接也可以是“对象”。

在JS中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。

对象是由属性和方法组成的：

- 属性：事物的**特征**，在对象中用**属性**来表示(常用名词)
- 方法：事物的**行为**，在对象中用**方法**来表示(常用名词)

### 1.2.2 类class

在ES6中新增加了类的概念，可以使用css关键字声明一个类，之后这个类来实例化对象。

**类**抽象了对象的公共部分，它**泛指**某一大类(class)

**对象**  **特指**某一个，通过类实例化一个具体的对象

### 1.2.3 创建类

语法：

class name  {

​	// class body

}

创建实例：

var xx = new name();

**注意：类必须使用new实例化对象**

### 1.2.4 类constructor构造函数

**constructor()**方法是类的构造函数(默认方法)，**用于传递参数，返回实例对象**，通过new命令生成对象实例时，自动调用该方法。如果没有显示定义，类内部会自动给我们创建一个**constructor()**

### 1.2.5 注意事项

（1）通过class关键字创建类，类名我们还是习惯性定义首字母大写

（2）类里面有个constructor函数，可以接收传递过来的参数，同时返回实例对象

（3）constructor函数只要new生成实例时，就会自动调用这个函数，如果我们不写这个函数，类也会自动生成这个函数

（4）生成实例new不能省略

（5）最后注意语法规范，创建类 类名后面不要加小括号，生成实例 类名后面加小括号，构造函数不需要加function

（6）多个函数方法之间不需要添加逗号分隔

## 1.3 类的继承

### 1.3.1 继承语法

现实中的继承：子承父业，比如我们都继承了父亲的姓。

程序中的继承：子类可以继承父类的一些属性和方法。

语法：

class Father{    // 父类

}

class Son **extends** Father {  // 子类继承父类

}

### 1.3.2 super关键字

**super关键字**用于访问和调用对象父类上的函数。可以调用父类的构造函数，**也可以调用父类的普通函数。**

注意：继承中的属性或者方法查找原则：就近原则

1. 继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就先执行子类的。
2. 继承中，如果子类里面没有，就去查找父类有没有这个方法，如果有，就执行父类的这个方法(就近原则)。
3. 子类在构造函数中使用super，必须放到this前面（必须先调用父类的构造方法，再使用子类构造方法）

### 1.3.3 使用类2个注意点

1. 在ES6中类没有变量提升，所以必须先定义类，才能通过类实例化对象。
2. 类里面的共有的属性和方法一定要加this使用。
3. 类里面的this指向问题。
4. constructor里面的this指向实例对象，方法里面的this指向这个方法的调用者。

## 1.4 面向对象案例

### 1.4.1 案例--面向对象版tab栏切换

功能需求：

1. 点击tab栏，可以切换效果

2. 点击+号，可以添加tab项和内容项

   （1）第一步：创建新的选项卡li和新的内容section

   （2）第二步：把创建的两个元素追加到对应的父元素中

   （3）以前的做法：动态创建元素createElement，但是元素里面内容较多，需要innerHTML赋值在appendChild追加到父元素里面

   （4）现在高级做法：利用insertAdjacentHTML()可以直接把字符串格式元素添加到父元素中

   （5）appendChild不支持追加字符串的子元素，insertAdjacentHTML支持追加字符串的元素

3. 点击X号，可以删除当前的tab项和内容项

   （1）X是没有索引号的，但是它的父亲li有索引号，这个索引号正是我们想要的索引号

   （2）核心思路是：点击X号可以删除这个索引号对应的li和section

4. 双击tab项文字或者内容项文字，可以修改里面的文字内容

   （1）双击事件是：ondblclick

   （2）如果双击文字，会默认选定文字，此时需要双击禁止选中文字

   （3）window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()

   （4）核心思路：双击文字的时候，在里面生成一个文本框，当失去焦点或者按下回车然后把文本框输入的值给原先元素即可

抽象对象：Tab对象

1. 该对象具有切换功能
2. 该对象具有添加功能
3. 该对象具有删除功能
4. 该对象具有修改功能

# 2. 构造函数和原型

## 2.1 构造函数和原型

### 2.1.1 概述

在典型的OOP语言中(如java)，都存在类的概念，类就是对象的模板，对象就是类的实例，但在ES6之前，JS中并没有引入类的概念。

ES6，全称ECMAScript6.0,2015.06发版。但是目前浏览器的JavaScript是ES5版本，大多数高版本的浏览器也支持ES6，不过只实现了ES6的部分特性和功能。

在ES6之前，对象不是基于类创建的，而是用一种称为**构造函数**的特殊函数来定义对象和它们的特征。

创建对象可以通过以下三种方式：

1. 对象字面量
2. new Object()
3. 自定义构造函数

## 2.1.2 构造函数

**构造函数**是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初值，它总与new一起使用。我们可以把对象中的一些公共的属性和方法抽取出来，然后封装到这个函数里面。

在JS中，使用构造函数时要注意以下两点：

1. 构造函数用于创建某一类对象，其**首字母要大写**
2. 构造函数要**和new一起使用**才有意义

new在执行时会做4件事情：

（1）在内存中创建一个新的空对象

（2）让this指向这个新的对象

（3）执行构造函数里面的代码，给这个新对象添加属性和方法

（4）返回这个新对象(所以构造函数里面不需要return)

JS的构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的this上添加。通过这两种方式添加的成员，就分别称为**静态成员**和**实例成员**。

- 静态成员：在构造函数上添加的成员称为**静态成员**，**只能由构造函数本身来访问**
- 实例成员：在构造函数内部创建的对象成员称为**实例成员**，**只能由实例化的对象来访问**

### 2.1.3 构造函数的问题

构造函数方法很好用，但是**存在浪费内存的问题**。

### 2.1.4 构造函数原型prototype

构造函数通过原型分配的函数是所有对象所**共享的**。

JS规定，每一个构造函数都有一个prototype属性，指向另一个对象。注意这个prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。

**我们可以把那些不变的方法，直接定义在prototype对象上，这样所有对象的实例就可以共享这些方法**。

问答？

1. 原型是什么？

   答：一个对象，我们也称为prototype为**原型对象**。

2. 原型的作用是什么？

   **共享方法**。

### 2.1.5 对象原型 _ proto _

**对象都会有一个属性_ proto** _ _指向构造函数的prototype原型对象，之所以我们对象可以使用构造函数prototype原型对象的属性和方法，就是因为对象有_ _ proto _原型的存在。

- _ proto _对象原型和原型对象prototype是等价的
- _ proto _对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性（一般不赋值），它只是内部指向原型对象prototype

### 2.1.6 constructor构造函数

对象原型_ proto _和构造函数prototype原型对象里面都有一个属性**constructor**属性，constructor我们称为构造函数，因为它指回构造函数本身。

constructor主要用于记录该对象引用哪个构造函数，它可以让原型对象重新指向原来的构造函数。

### 2.1.7 构造函数、实例、原型对象三者之间的关系

### 2.1.8 原型链

### 2.1.9 JS的成员查找机制(规则)

1. 当访问一个对象的属性(包括方法)时，首先查找这个**对象自身**有没有该属性。
2. 如果没有就查找它的原型（也就是__ proto __ 指向的**prototype原型对象**）。
3. 如果还没有就查找原型对象的原型（**Object的原型对象**）。
4. 依次类推一直找到Object为止（**null**）。
5. __ proto __对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条线路。

### 2.1.10 原型对象this指向

原型对象this和构造函数中this都指向实例化对象。

### 2.1.11 扩展内置对象

可以通过原型对象，对原来的内置对象进行扩展自定义的方法。比如给数组增加自定义求偶数和的功能。

注意：数组和字符串内置对象不能给原型对象覆盖操作Array.prototype = {}，只能是Array.prototype.xxx = function() {}的方式。

## 2.2 继承

ES6之前并没有给我们提供extends继承。我们可以通过**构造函数+原型对象**模拟实现继承，被称为**组合继承**。

### 2.2.1 call()

调用这个函数，并且修改函数运行时的this指向

语法：

fun.call(thisArg, arg1, arg2, ...)

- thisArg：当前调用函数this的指向对象
- arg1，arg2：传递的其他参数

### 2.2.2 借用构造函数继承父类型属性

核心原理：通过call()把父类型的this指向子类型的this，这样就可以实现子类型继承父类型的属性。**Father.call(this,uname,age)**

### 2.2.3 借用原型对象继承父类型方法

不能将父原型对象直接赋给子原型对象，这样会有问题：如果修改了子原型对象，父原型对象也会跟着一起变化

Son.prototype = new Father();

Son.prototype.constructor = Son; // 如果利用对象的形式修改了原型对象，需要利用constructor指回原来的构造函数

## 2.3 ES5中的新增方法

### 2.3.1 ES5新增方法概述

ES5中给我们新增了一些方法，可以很方便的操作数组或者字符串，这些方法主要包括：

- 数组方法
- 字符串方法
- 对象方法

### 2.3.2 数组方法

迭代（遍历）方法：forEach()、map()、fliter()、some()、every()

**forEach()语法：**

array.forEach(function(currentValue, index, arr))

- currentValue：数组当前项的值
- index：数组当前项的索引
- arr：数组对象本身

**filter()语法：**

array.fliter(function(currentValue, index, arr))

- fliter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，**主要用于筛选数组**
- **注意它直接返回一个数组**

**some()语法：如果查询数组中唯一的元素，用some方法更合适**

array.some(function(currentValue, index, arr))

- some()方法用于检测数组中的元素是否满足指定条件，通俗点：查找数组中是否有满足条件的元素
- **注意它返回值的布尔值，如果查找到这个元素，就返回true，如果查找不到就返回false**
- 如果找到第一个满足条件的元素，则终止循环，不再继续查找

#### 2.3.2.1 查询商品案例

1. 把数据渲染到页面中（forEach）
2. 根据价格显示数据（filter）
3. 根据商品名称显示数据（some）

### 2.3.3 字符串方法

trim()方法会从一个字符串的两端删除空白字符。

**语法：**

**str.trim()**

trim()方法并不影响原字符串本身，它返回的是一个新的字符串。

### 2.3.4 对象方法

1. Object.keys()用于获取对象自身所有的属性

   语法：Object.keys(obj)

   - 效果类似于for...in
   - 返回一个由属性名组成的数组

2. Object.defineProperty()定义对象中新属性或修改原有的属性。

   语法：Object.defineProperty(obj, prop, descriptor)

   - obj：必需。目标对象

   - prop：必需。需定义或修改的属性的名字

   - descriptor：必需。目标属性所拥有的特性

     说明：以对象形式{ }书写

     （1）value：设置属性的值 默认为undefined

     （2）writable：值是否可以重写，true|false默认为false

     （3）enumerable：目标属性是否可以被枚举。true|false默认为false

     （4）configurable：目标属性是否可以被删除或是否可以再次修改特性

# 3. 函数进阶

## 3.1 函数的定义和调用

### 3.1.1 函数的定义方式

1. 函数声明方式function关键字（命名函数）

2. 函数表达式（匿名函数）

3. new Function();

   语法：var fn = new Function(‘参数1’，‘参数2’，‘函数体’)

   - Function里面参数都必须是字符串格式
   - 第三种方式执行效率低，也不方便书写，因此较少使用
   - 所有函数都是Function的实例(对象)
   - 函数也属于对象

### 3.1.2 函数的调用方式

1. 普通函数
2. 对象的方法
3. 构造函数
4. 绑定事件函数
5. 定时器函数
6. 立即执行函数

<script>
    // 函数的调用方式
    // 1. 普通函数
    function fn() {
      console.log('普通函数');
    }
    // fn();
    // fn.call();
     // 2. 对象的方法
    var o = {
      sayHi: function () {
        console.log('普通函数');
      }
    }
    // o.sayHi();
      // 3. 构造函数
    function Star() {
         };
    new Star();
    // 4. 绑定事件函数
    btn.onclick = function () {
          }  // 点击了按钮就可以调用这个函数
     // 5. 定时器函数
    setInterval(function () {
        }, 1000)  // 这个函数是定时器自动1s钟调用一次
     // 6. 立即执行函数
      (function () {
        console.log();
      })();  // 立即执行函数是自动调用
  </script>

## 3.2 this

### 3.2.1 函数内this的指向

这些this的指向，是当我们调用函数的时候确定的。调用方式的不同决定了this的指向不同。一般指向我们的调用者。

| 调用方式     | this指向                                  |
| ------------ | ----------------------------------------- |
| 普通函数调用 | window                                    |
| 构造函数调用 | 实例对象 原型对象里面的方法也指向实例对象 |
| 对象方法调用 | 该方法所属对象                            |
| 事件绑定方法 | 绑定事件对象                              |
| 定时器函数   | window                                    |
| 立即执行函数 | window                                    |

### 3.2.2 改变函数内部this指向

JavaScript为我们专门提供了一些函数方法来帮我们更优雅的处理函数内部this的指向问题，常用的有bind()、call()、apply()三种方法。

1. call方法

   call()方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的this指向。

   fun.call(thisArg,arg1,arg2...)

2. apply方法

   apply()方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的 this指向。

   fun.apply(thisArg,[argsArray])

   - thisArg:在fun函数运行时指定的this值
   - argsArray：传递的值，必须包含在数组里面
   - 返回值就是函数的返回值，因为它就是调用函数

3. bind()方法不会调用函数，但是能改变函数内部this指向

   fun.bind(thisArg,arg1,arg2,...)

   - this.Arg : 在fun函数运行时指定的this值
   - arg1，arg2：传递的其他参数
   - 返回由指定的this值和初始化参数改造的原函数拷贝

4. call apply bind总结

   相同点：都可以改变函数内部的this指向

   区别点：1. call和apply会调用函数，并且改变函数内部this指向

                  2. call和apply传递的参数不一样，call传递参数aru1，aru2...形式 apply必须数组形式[arg]
                     3. bind不会调用函数，可以改变函数内部this指向

   主要应用场景：

   1. call经常做继承
   2. apply经常跟数组有关系，比如借助于数学对象实现数组最大值最小值
   3. bind不调用函数，但是还想改变this指向，比如改变定时器内部的this指向

## 3.3 严格模式

### 3.3.1 什么是严格模式

JavaScript除了提供正常模式外，还提供了**严格模式(strict mode)**。ES5的严格模式是采用具有限制性JavaScript变体的一种方式，即在严格的条件下运行JS代码。

严格模式在IE10以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略。

严格模式对正常的JavaScript语义做了一些更改：

1. 消除了JavaScript语法的一些不合理、不严谨之处，减少了一些怪异行为。
2. 消除代码的一些不安全之处，保证代码运行的安全。
3. 提高编译器效率，增加运行速度。
4. 禁用了在ECMAScript的未来版本中可能定义的一些语法，为未来新版本的JavaScript做好铺垫。比如一些保留字如：class、enum、export、extends、import、super不能做变量名

### 3.3.2 开启严格模式

严格模式可以应用到**整个脚本**或**个别函数**中。因此在使用时，我们可以将严格模式分为**为脚本开启严格模式**和**为函数开启严格模式**两种情况。

1. 为脚本开启严格模式

   为整个脚本文件严格模式，需要**在所有语句之前放一个待定语句“use strict”;(或 ‘use strict’)**。

   <script>
       "use strict";
       console.log("这是严格模式");
   </script>

   有的script脚本是严格模式，有的script脚本是正常模式，这样不利于文件合并，所以可以将整个脚本文件放在一个立即执行的匿名函数之中。这样独立创建一个作用域而不影响其他script脚本文件。

   <script>
       (function() {
           "use strict";
           var num = 10;
           function fn() {}
       })();
   </script>

2. 为函数开启严格模式

   要给某个函数开启严格模式，需要把“use strict”;(或‘use strict’;)声明放在函数体所有语句之前。

### 3.3.3 严格模式中的变化

严格模式对JavaScript的语法和行为，都做了一些改变。

1. 变量规定

   (1) 在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，变量都必须先用var命令声明，然后再使用。

   (2) 严禁删除已经声明变量。例如，delete x；语法是错误的。

2. 严格模式下this指向问题

   (1) 以前在全局作用域函数中的this指向window对象。

   (2) **严格模式下全局作用域中函数中的this是undefined**，不再是window。如果给this赋值会报错。

   (3) 以前构造函数时不加new也可以调用，当普通函数，this指向全局对象。

   (4) 严格模式下，如果构造函数不加new调用，this会报错。

   (5) new实例化的构造函数指向创建的对象实例。

   (6) 定时器this还是指向window。

   (7) 事件、对象还是指向调用者。

3. 函数变化

   (1) 函数不能有重名的参数。

   (2) 函数必须声明在顶层 新版本的JavaScript会引入“块级作用域”(ES6中已引入)。为了与新版本接轨，不允许在非函数的代码块内声明函数。

## 3.4 高阶函数

**高阶函数**是对其他函数进行操作的函数，它**接收函数作为参数**或**将函数作为返回值输出**。

<script>
    function fn(callback) {
        callback&&callback();
    }
    fn(function() {alert('hi')})
</script>

<script>
    function fn() {
        return function() {}
    }
    fn();
</script>

此时，fn就是一个高阶函数

函数也是一种数据类型，同样可以作为参数，传递给另外一个参数使用。最典型的就是作为回调函数。

## 3.5 闭包

### 3.5.1 变量作用域

变量根据作用域的不同分为两种：全局变量和局部变量。

1. 函数内部可以使用全局变量。
2. 函数外部不可以使用局部变量。
3. 当函数执行完毕，本作用域内的局部变量会销毁。

### 3.5.2 什么是闭包

**闭包(closure)**指有权**访问**另一个函数作用域中**变量**的**函数**。------JavaScript高级程序设计

简单理解就是，一个作用域可以访问另外一个函数内部的局部变量。

闭包的作用：延伸了变量的作用范围。

### 3.5.3 闭包案例

1. 循环注册点击事件。点击li打印当前li的索引号。

   <script>
       var lis = document.querySelector('.nav').querySelectorAll('li');
       for (var i = 0; i < lis.length; i++) {
           (function(i) {
               lis[i].onclick = function() {
                   console.log(i);
               }
           })(i);
       }
   </script>

2. 循环中的setTimeout()。3秒钟之后，打印所有li元素的内容。

   <script>
       var lis = document.querySelector('.nav').querySelectorAll('li');
       for (var i = 0; i < lis.length; i++) {
           (function(i) {
               setTimeout(function(){
                   console.log(lis[i].innerHTML);
               },3000);
           })(i);
       }
   </script>

3. 计算打车价格

   <script>
       var car = (function() {
           var start = 13;
           var total = 0;
           return {
               // 正常的价格
               price: function(n) {
                   if (n < 3) {
                       total = start;
                   } else {
                       total = start + (n-3)*5;
                   }
                   return total;
               }
               // 拥堵的价格
               yd: function(flag) {
                   return flag ? total + 10 : total;
               }
           }
       })();
       console.log(car.price(5)); // 23
       console.log(car.yd(true)); // 33
       console.log(car.price(1)); // 13
       console.log(car.yd(false)); // 13
   </script>

### 3.5.4 闭包总结

1. 闭包是什么？

   闭包是一个函数(一个作用域可以访问另一个函数的局部变量)

2. 闭包的作用是什么？

   延伸变量的作用范围

## 3.6 递归

### 3.6.1 什么是递归？

如果**一个函数在内部可以调用其本身**，那么这个函数就是**递归函数**。

简单理解：函数内部自己调用自己，这个函数就是递归函数。

递归函数的作用和循环效果一样

由于递归很容易发生“栈溢出”错误(stack overflow)，所以必须要加退出条件return。

### 3.6.2 利用递归求数学题

1. 1 * 2 * 3 *...... *n的乘积

   <script>
       function fn(n) {
           if (n == 1) {
               return 1;
           }
           return n * fn(n - 1);
       }
       console.log(fn(3));
   </script>

2. 求斐波那契数列

   <script>
       function fb(n) {
           if (n == 1 || n == 2) {
               return 1;
           }
           return fb(n - 1) + fb(n - 2);
       }
       console.log(fb(3));
       console.log(fb(6));
   </script>

3. 利用递归求：根据id返回对应的数据对象

   <script>
       var data = [{
         id: 1,
         name: '家电',
         goods: [{
           id: 11,
           gname: '冰箱',
           goods: [{
             id: 111,
             gname: '海尔'
           }, {
             id: 112,
             gname: '美的'
           }]
         }, {
           id: 12,
           gname: '洗衣机',
         }]
       }, {
         id: 2,
         name: '服饰'
       }];
       // 我们想要做输入id号，就可以返回数据对象
       // 1. 利用forEach去遍历里面的每一个对象
       function getID(json, id) {
         var o = {};
         json.forEach(function (item) {
           // console.log(item); // 两个数组元素
           if (item.id == id) {
             // console.log(item);
             o = item;
             return item;
             // 2. 我们想要得到里层的数据 11 12 可以利用递归函数
             // 里面应该有goods这个数组并且数组的长度不为0
           } else if (item.goods && item.goods.length > 0) {
             o = getID(item.goods, id);
           }
         });
         return o;
       }
       console.log(getID(data, 1));
       console.log(getID(data, 2));
       console.log(getID(data, 11));
       console.log(getID(data, 111));
     </script>

### 3.6.3 浅拷贝和深拷贝

1. 浅拷贝只是拷贝一层，更深层次对象级别的只拷贝引用

2. 深拷贝拷贝多层，每一级别的数据都会拷贝

3. Object.assign(target,...sources) es6新增方法可以实现浅拷贝

    <script>
       // 深拷贝拷贝多层，每一级别的数据都会拷贝
       var obj = {
         id: 1,
         name: 'andy',
         msg: {
           age: 18
         },
         color: ['pink', 'red']
       };
       var o = {};
       // 封装函数
       function deeoCopy(newobj, oldobj) {
         for (var k in oldobj) {
           // 判断我们的属性值属于哪种数据类型
           // 1. 获取属性值 oldobj[k]
           var item = oldobj[k];
           // 2. 判断这个值是否是数组
           if (item instanceof Array) {
             newobj[k] = [];
             deeoCopy(newobj[k], item);
           } else if (item instanceof Object) {
             // 3. 判断这个值是否是对象
             newobj[k] = {};
             deeoCopy(newobj[k], item);
           } else {
             // 4. 属于简单数据类型
             newobj[k] = item;
           }
                }
       }
       deeoCopy(o, obj);
       console.log(o);
       o.msg.age = 20;
       console.log(obj);
     </script>

# 4. 正则表达式

## 4.1 正则表达式概述

### 4.1.1 什么是正则表达式

**正则表达式(Regular Expression)**是用于匹配字符串中字符组合的模式。在JavaScript中，正则表达式也是对象。

正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本，例如验证表单：用户名表单只能输入英文字母、数字或者下划线，昵称输入框中可以输入中文(**匹配**)。此外，正则表达式还常用于过滤掉页面内容中的一些敏感词(**替换**),或从字符串中获取我们想要的特定部分(**提取**)等。

其他语言也会使用正则表达式，本阶段我们主要是利用JavaScript正则表达式完成表单验证。

### 4.1.2 正则表达式的特点

1. 灵活性、逻辑性和功能性非常的强。
2. 可以迅速地用极简单的方式达到字符串的复杂控制。
3. 对于刚接触的人来说，比较晦涩难懂。比如：^\w+([-+.]\w+)*@\w+([-.]\w+) * \ .\ w+([-.]\w+) * $
4. 实际开发，一般都是直接复制写好的正则表达式。但是要求会使用正则表达式并且根据实际情况修改正则表达式。比如用户名：/^[a-z0-9_-]{3,16}$/

## 4.2 正则表达式在JavaScript中的使用

### 4.2.1 创建正则表达式

在JavaScript中，可以通过两种方式创建一个正则表达式。

1. 通过调用RegExp 对象的构造函数创建

   var 变量名 = new RegExp(/表达式/);

2. 通过字面量创建

   var 变量名 = / 表达式 /;

### 4.2.2 测试正则表达式 test

test()正则对象方法，用于检测字符串是否符合该规则，该对象会返回true或false，其参数是测试字符串。

语法：regexObj.test(str)

1. regexObj 是写的正则表达式
2. str是我们要测试的文本
3. 就是检测str文本是否符合我们写的正则表达式规范

## 4.3 正则表达式中的特殊字符

### 4.3.1 正则表达式的组成

一个正则表达式可以由简单的字符构成，比如/abc/，也可以是简单和特殊字符的组合，比如/ab*c/。其中特殊字符也被称为元字符，在正则表达式中是具有特殊意义的专用符号，如^、$、+等。我们把元字符划分几类学习。

### 4.3.2 边界符

正则表达式中的边界符(位置符)用来**提示字符所处的位置**，主要有两个字符。

| 边界符 | 说明                         |
| ------ | ---------------------------- |
| ^      | 表示匹配行首的文本(以谁开始) |
| $      | 表示匹配行尾的文本(以谁结束) |

如果是^和$在一起，表示必须是精确匹配。

### 4.3.3 字符类

字符类表示有一系列字符可供选择，只要匹配其中一个就可以了。**所有可供选择的字符都放在方括号内**。

<script>
    // var reg = /abc/;   只要包含abc就可以
    // 字符类： [] 表示有一系列字符可供选择，只要匹配其中一个就可以了
    var rg = /[abc]/;  // 只要包含有a  或者 包含有b  或者包含有c 都返回true
    console.log(rg.test('andy'));  // true
    console.log(rg.test('baby'));  // true
    console.log(rg.test('color')); // true
    console.log(rg.test('red'));   // false
    var rg1 = /^[abc]$/;  // 三选一 只有是 a 或者是 b 或者是c 这三个字母才返回true
    console.log(rg1.test('aa')); // false
    console.log(rg1.test('a'));  // true
    console.log(rg1.test('b'));  // true
    console.log(rg1.test('c'));  // true
    console.log(rg1.test('abc')); // false
    var rg2 = /^[a-z]$/;   // 26个英文字母任何一个字母返回 true - 表示的是a到z的范围
    console.log(rg2.test('a'));  // true
    console.log(rg2.test('z'));  // true
    console.log(rg2.test(1));    // false
    console.log(rg2.test('A'));  // false
    // 字符组合 多选一
    var reg = /^[a-zA-Z0-9_-]$/; // 26个英文字母(大写和小写都可以)任何一个字母返回 true -表示的是a-z，A-Z，0-9,_以及-
    console.log(reg.test('a')); // true
    console.log(reg.test('B')); // true
    console.log(reg.test(8));   // true
    console.log(reg.test('-')); // true
    console.log(reg.test('_')); // true
    console.log(reg.test('!')); // false
    // 如果中括号里面有^ 表示取反的意思 千万和 我们边界符 ^ 别混淆
    var reg2 = /^[^a-zA-Z0-9_-]$/;
    console.log(reg2.test('a')); // false
    console.log(reg2.test('B')); // false
    console.log(reg2.test(8));   // false
    console.log(reg2.test('-')); // false
    console.log(reg2.test('_')); // false
    console.log(reg2.test('!')); // true
    console.log(reg2.test('abc')); // false
  </script>

方括号内部范围符-

[^]方括号内部 取反符^

### 4.3.4 量词符

量词符用来**设定某个模式出现的次数**。

简单理解：就是让a这个字符重复多少次

| 量词  | 说明             |
| ----- | ---------------- |
| *     | 重复零次或更多次 |
| +     | 重复一次或更多次 |
| ？    | 重复零次或一次   |
| {n}   | 重复n次          |
| {n,}  | 重复n次或更多次  |
| {n,m} | 重复n到m次       |

<script>
    // 量词符：用来设定某个模式出现的次数
    // 简单理解：就是让下面的a这个字符重复多少次
    // var reg = /^a$/;
    // * 相当于 >= 0 可以出现0次或者很多次
    var reg = /^a*$/;
    console.log(reg.test('')); // true
    console.log(reg.test('a')); // true
    console.log(reg.test('aaa')); // true
    console.log('-------------------');
    // + 相当于 >= 1 可以出现1次或者很多次
    var reg1 = /^a+$/;
    console.log(reg1.test('')); // false
    console.log(reg1.test('a')); // true
    console.log(reg1.test('aaaa')); // true
    console.log('-------------------');
    // ? 相当于 1 || 0
    var reg2 = /^a?$/;
    console.log(reg2.test('')); // true
    console.log(reg2.test('a')); // true
    console.log(reg2.test('aaa')); // false
    console.log('-------------------');
    // {3  }就是重复3次
    var reg3 = /^a{3}$/;
    console.log(reg3.test('aaa')); // true
    console.log(reg3.test('aa'));  // false
    console.log('-------------------');
    // {3, }大于等于3
    var reg4 = /^a{3,}$/;
    console.log(reg4.test('aaaa')); // true
    console.log(reg4.test('')); // false
    console.log(reg4.test('aa')); // false
    console.log(reg4.test('aaa')); // true
    console.log('----------------------');
    // {3, 16} 大于等于3 并且 小于等于16
    var reg5 = /^a{3,16}$/;
    console.log(reg5.test('')); // false
    console.log(reg5.test('a')); // false
    console.log(reg5.test('aaa')); // true
    console.log(reg5.test('aaaaaaaaaaaaaaaa')); // true
    console.log(reg5.test('aaaaaaaaaaaaaaaaaa')); // false
  </script>

### 4.3.5 案例--用户名验证

案例--用户名验证

功能需求：

1. 如果用户名输入合法，则后面提示信息为：用户名合法，并且颜色为绿色
2. 如果用户名输入不合法，则后面提示信息为：用户名不符合规范，并且颜色为红色

分析：

1. 用户名只能为英文字母，数字，下划线或者短横线组成，并且用户名长度为6~16位

2. 首先准备好这种正则表达式模式/^[a-zA-Z0-9_-]{6,16}$/

3. 当表单失去焦点就开始验证

4. 如果符合正则规范，则让后面的span标签添加right类

5. 如果不符合正则规范，则让后面的span标签添加wrong类

   <script>
       // 量词是设定某个模式出现的次数
       var reg = /^[a-zA-Z0-9_-]{6,16}$/;  // 这个模式用户只能输入英文字母 数字 下划线 短横线
       // 但是有边界符和[] 这就限定了只能多选一
       // {6,16}中间不要有空格
       var uname = document.querySelector('.uname');
       var span = document.querySelector('span');
       uname.onblur = function () {
         if (reg.test(this.value)) {
           // console.log('正确的');
           span.className = 'right';
           span.innerHTML = '用户名格式输入正确';
         } else {
           // console.log('错误的');
           span.className = 'wrong';
           span.innerHTML = '用户名格式输入错误';
         }
       }
     </script>

### 4.3.6 括号总结

1. 大括号{} 量词符，里面表示重复次数
2. 中括号[] 字符集合，匹配方括号中的任意字符
3. 小括号() 表示优先级

可以在线测试： https://c.runoob.com/

### 4.3.7 预定义类

预定义类指的是**某些常见模式的简写方式**。

| 预定义类 | 说明                                                       |
| -------- | ---------------------------------------------------------- |
| \d       | 匹配0-9之间的任一数字，相当于[0-9]                         |
| \D       | 匹配所有0-9以外的字符，相当于[ ^ 0-9 ]                     |
| \w       | 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]           |
| \W       | 除所有字母、数字和下划线以外的字符，相当于[ ^ A-Za-z0-9_]  |
| \s       | 匹配空格(包括换行符、制表符、空格符等)，相当于[\t\r\n\v\f] |
| \S       | 匹配非空格的字符，相当于[ ^ \t\r\n\v\f]                    |

### 4.3.8 案例--座机号码验证

案例--座机号码验证

<script>
    // 座机号码验证： 全国座机号码 两种格式：010-12345678  或者 0530-1234567
    // 正则里面的或者 符号 |
    // var reg = /^\d{3}-\d{8}|\d{4}-\d{7}$/;
    var reg = /^\d{3,4}-\d{7,8}$/;
  </script>

### 4.3.9 案例--表单验证

分析：

1. 手机号码： / ^ 1 [3 | 4 | 5 | 7 | 8 ] [ 0 - 9 ] $ /

2. QQ号：[ 1 - 9 ] [ 0 - 9 ]{4,}   (腾讯QQ号从10000开始)

3. 昵称是中文：^ [ \ u4e00-\ u9fa5]{2,8}$

4. 两次密码需保持一致

   <script>
     window.onload = function () {
     var regtel = /^1[3|4|5|7|8]\d{9}$/ // 手机号码的正则表达式
     var regqq = /^[1-9]\d{4,}$/ // 10000
     var regnc = /^[\u4e00-\u9fa5]{2,8}$/
     var regmsg = /^\d{6}$/
     var regpwd = /^[a-zA-Z0-9_-]{6,16}$/
     var tel = document.querySelector("#tel")
     var qq = document.querySelector("#qq")
     var nc = document.querySelector("#nc")
     var msg = document.querySelector("#msg")
     var pwd = document.querySelector("#pwd")
     var surepwd = document.querySelector("#surepwd")
     regexp(tel, regtel) // 手机号码
     regexp(qq, regqq) // qq号码
     regexp(nc, regnc) // 昵称
     regexp(msg, regmsg) // 短信验证
     regexp(pwd, regpwd) // 密码框
     // 表单验证的函数
     function regexp (ele, reg) {
       ele.onblur = function () {
         if (reg.test(this.value)) {
           // console.log("正确的")
           this.nextElementSibling.className = "success"
           this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
         } else {
           // console.log("不正确")
           this.nextElementSibling.className = "error"
           this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请重新输入'
         }
       }
     }
     surepwd.onblur = function () {
       if (this.value == pwd.value) {
         this.nextElementSibling.className = "success"
         this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
       } else {
         this.nextElementSibling.className = "error"
         this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致'
       }
     }
   }
     </script>

## 4.4 正则表达式中的替换

### 4.4.1 replace替换

replace()方法可以实现替换字符串操作，用来替换的参数可以是一个字符串或是一个正则表达式。

stringObject.replace(regexp/substr,replacement)

1. 第一个参数：被替换的字符串 或者 正则表达式
2. 第二个参数：替换为的字符串
3. 返回值是一个替换完毕的新字符串

### 4.4.2 正则表达式参数

/ 表达式 /[switch]

switch(也称为修饰符)按照什么样的模式来匹配，有三种值：

- g：全局匹配
- i：忽略大小写
- gi：全局匹配+忽略大小写

# 5. ES6简介

## 5.1 ES6简介

### 5.1.1 什么是ES6?

ES的全称是ECMAScript，它是由ECMA国际标准化组织，制定的**一项脚本语言的标准化规范**。

| 年份      | 版本   |
| --------- | ------ |
| 2015年6月 | ES2015 |
| 2016年6月 | ES2016 |
| 2017年6月 | ES2017 |
| 2018年6月 | ES2018 |
| ...       | ...    |

ES6实际上是一个泛指，泛指ES2015及后续的版本。

### 5.1.2 为什么使用ES6？

每一次标准的诞生都意味着语言的完善，功能的加强。JavaScript语言本身也有一些令人不满意的地方。

- 变量提升特性增加了程序运行时的不可预测性
- 语法过于松散，实现相同的功能，不同的人可能会写出不同的代码
- 在ECMAScript新的标准里面增加了很多新的功能，它的目标是将JavaScript打造为企业级开发语言，使它能够开发复杂的、大型的应用程序，所以ES6是大势所趋

## 5.2 ES6的新增语法

### 5.2.1 let

let是ES6中新增的用于声明变量的关键字，特点如下：

- let声明的变量只在所处于的块级有效，可以防止循环变量变成全局变量

  if (true) {

  ​	let a = 10;

  }

  console.log(a);   // a is not defined

  注意：使用let关键字声明的变量才具有块级作用域，使用var声明的变量不具备块级作用域特性。

- 不存在变量提升(只能先声明再使用)

  console.log(a);  // a is not defined

  let a = 20;

- 暂时性死区

  var tmp = 123;

  if (true) {

  ​	tmp = ‘abc’;  // Cannot access 'tmp' before initialization

  ​	let tmp;

  }

#### 5.2.1.1 关于let关键字的经典面试题

var arr = [];

for (var i = 0; i < 2; i++) {

​	arr[i] = function() {

​		console.log(i);

​    }

}

arr[ 0 ] ();

arr[ 1 ] ();

经典面试题图解：此题的关键点在于变量i是全局的，函数执行时输出的都是全局作用域下的i值。



let arr = [];

for (let i = 0; i < 2; i++) {

​	arr[i] = function() {

​		console.log(i);

​	}

}

arr[ 0 ] ();

arr[ 1 ] ();

经典面试题图解：此题的关键点在于每次循环都会产生一个块级作用域，每个块级作用域中的变量都是不同的，函数执行时输出的是自己上一级(循环产生的块级作用域)作用域下的i值。

### 5.2.2 const

作用：声明常量，常量就是值(内存地址)不能变化的量。

特点如下：

- 具有块级作用域

  if (true) {

  ​	const a = 10;

  }

  console.log(a);  // a is not defined

- 声明常量时必须赋值。

  const PI;  // Missing initializer in const declaration

- 常量赋值后，值不能修改。

  const PI = 3.14;

  PI = 100; // Assignment to constant variable

  对于基本数据类型，值不可以更改

  const ary = [100,200];

  ary[0] = ‘a’;

  ary[1] = ‘b’;

  console.log(ary);  // [‘a’, ‘b’];

  ary = [‘a’, ‘b’];   // Assignment to constant variable

  对于复杂数据类型来说，它内部的值是可以更改的，但是不可以对它重新赋值，常量值对应的内存地址不可更改。

### 5.2.3 let、const、var的区别

1. 使用**var**声明的变量，其作用域为**该语句所在的函数内，且存在变量提升现象**。
2. 使用**let**声明的变量，其作用域为**该语句所在的代码块内，不存在变量提升**。
3. 使用**const**声明的是常量，在后面出现的代码中**不能再修改该常量的值**。

| var          | let            | const          |
| ------------ | -------------- | -------------- |
| 函数级作用域 | 块级作用域     | 块级作用域     |
| 变量提升     | 不存在变量提升 | 不存在变量提升 |
| 值可更改     | 值可改变       | 值不可更改     |

### 5.2.4 解构赋值

ES6中允许从数组中提取值，按照对应位置，对变量赋值。对象也可以实现解构。

**数组解构**

将数组中的值提取出来赋值给变量

let [a, b, c] = [1, 2, 3];  // 右边的[]代表数组，左边的[]代表解构，表示从数组中提取值

console.log(a);

console.log(b);

console.log(c);

如果解构不成功，变量的值为undefined。

let [foo] = [];   // undefined

let [bar, foo] = [1];  // bar = 1; undefined

**对象解构**

```js
let person = {name:  ‘zhangsan’,  age:  20};

let {name, age} = person;

console.log(name);   // ‘zhangsan’ 

console.log(age);   // 20
```

对象解构可以简单理解为属性匹配

```js
let person = {name:  ‘zhangsan’,  age:  20};

let {name: myName, age: myAge} = person;  // myName  myAge属于别名  name和age用于属性匹配，myName和myAge是真正的变量用于赋值

console.log(myName);   // ‘zhangsan’

console.log(myAge);  // 20
```

### 5.2.5 箭头函数

ES6中新增的定义函数的方式。

```js
() => {}
const fn = () => {}
```

函数体中只有一句代码，且代码的执行结果就是返回值，可以省略大括号

```js
function sum(num1,num2) {
	return num1 + num2;
}
```

```js
const sum = (num1,num2) => num1 + num2;
```

如果形参只有一个，可以省略小括号

```js
function fn (v) {
	return v;
}
```

```js
const fn = v => v;
```

箭头函数不绑定this关键字，箭头函数中的this，指向的是**函数定义位置的上下文this。**

```js
const obj = {name: '张三'}
function fn () {
	console.log(this);
	return () => {
	console.log(this);
	}
}
const resFn = fn.call(obj);
resFn();
```

#### 5.2.5.1 箭头函数面试题

```js
var obj = {
	age: 20,
	say: () => {
		alert(this.age);
	}
}
obj.say();  // 弹出undefined 
// obj是一个对象，不能产生作用域，箭头函数实际上被定义在全局作用域下,因此this指向window，window没有age属性
```

```js
var age = 100;
var obj = {
	age: 20,
	say: () => {
		alert(this.age);
	}
}
obj.say();  // 弹出100，即window下的age
```

### 5.2.6 剩余参数

剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

当函数实参个数大于形参个数时，

```js
function sum (first,...args) {
	console.log(first); // 10
	console.log(args);  // [20,30]
}
sum(10, 20, 30);
```

剩余参数和解构配合使用

```js
let students = ['wangwu', 'zhangsan', 'lisi'];
let [s1,...s2] = students;
console.log(s1);  // 'wangwu'
console.log(s2);  // ['zhangsan', 'lisi']
```

## 5.3 ES6的内置对象扩展

### 5.3.1 Array的扩展方法

#### 5.3.1.1 扩展运算符(展开语法)

扩展运算符可以将数组或者对象转为用逗号分隔的参数序列。

```js
let ary = [1, 2, 3];
...ary   // 1, 2, 3  在数组变量名称的前面加上...代表将数组元素拆分成以逗号分隔的参数序列
console.log(...ary);  // 1 2 3 参数序列当中的逗号被当做console.log方法的参数分隔符
console.log(1, 2, 3); // 1 2 3
```

####  5.3.1.2 扩展运算符的应用

扩展运算符可以应用于**合并数组**。

```js
// 方法一
let ary1 = [1, 2, 3];
let ary2 = [3, 4, 5];
let ary3 = [...ary1, ...ary2];
// 方法二
ary1.push(...ary2);
```

将类(伪)数组或可遍历对象转换为真正的数组

1. 扩展运算符加[]实现

```js
let oDivs = document.getElementsByTagName('div');
oDivs = [...oDivs];
```

2. 构造函数方法：Array.from()

```js
let arrayLike = {
	'0': 'a',
	'1': 'b',
	'2': 'c',
	length: 3
};
let arr2 = Array.from(arrayLike);  // ['a', 'b', 'c']
```

Array.from()方法还可以接收第二个参数，第二个参数是一个函数，作用是对数组中的元素进行加工处理，数组中有多少个元素，函数就会被调用多少次。作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

```js
let arrayLike = {
	"0": 1,
	"1": 2,
	"length": 2
};
let newAry = Array.from(arrayLike, item => item*2);
```

#### 5.3.1.3 实例方法：find()

用于找出第一个符合条件的数组成员，如果没有找到返回undefined

```js
let ary = [{
	id: 1,
	name: '张三'
}, {
	id: 2,
	name: '李四'
}];
let target = ary.find((item,index) => item.id == 2); // 函数体是查找条件
```

#### 5.3.1.4 实例方法：findIndex()

用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1

```js
let ary = [1, 5, 10, 15];
let index = ary.findIndex((value,index) => value > 9);
console.log(index);   // 2
```

#### 5.3.1.5 实例方法：includes()

表示某个数组是否包含给定的值，返回布尔值。

```js
[1, 2, 3].includes(2);  // true
[1, 2, 3].includes(4);  // false
```

### 5.3.2 String的扩展方法

#### 5.3.2.1 模板字符串

ES6新增的创建字符串的方式，使用反引号定义。

```js
let name = `zhangsan`;
```

#### 5.3.2.2 模板字符串的特点

模板字符串中可以**解析变量**。

```js
let name = '张三'; // let name = `张三`;
let sayHello = `hello,my name is ${name}`;  // hello,my name is zhangsan
```

模板字符串中可以**换行**。

```js
let result = {
	name: 'zhangsan',
	age: 20,
	sex: '男'
}；
let html = `<div>
	<span>${result.name}</span>
	<span>${result.age}</span>
	<span>${result.sex}</span>
</div>`;	
```

在模板字符串中可以调用函数。调用函数的位置将会显示函数的返回结果。

```js
const sayHello = function () {
	return '模板字符串中';
};
let greet = `${sayHello()} 可以调用函数`;
console.log(greet);  // 模板字符串中 可以调用函数
```

#### 5.3.2.3 实例方法：startsWith()和endsWith()

- startsWith()：表示参数字符串是否在原字符串的头部，返回布尔值
- endsWith()：表示参数字符串是否在元字符串的尾部，返回布尔值

```js
let str = 'Hello world!';
str.startsWith('Hello'); // true
str.endsWith('!');  //true
```

#### 5.3.2.4 实例方法：repeat()

repeat()方法表示将原字符串重复n次，返回一个新的字符串。

```js
'x'.repeat(3);  // "xxx"
'hello'.repeat(2);  // "hellohello"
```

### 5.3.3 Set数据结构

ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成Set数据结构。

```js
const s = new Set();
```

Set函数可以接收一个数组作为参数，用来初始化。

```js
const set = new Set([1, 2, 3, 4, 4]);
```

#### 5.3.3.1 实例方法

- add(value)：添加某个值，返回Set结构本身
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功
- has(value)：返回一个布尔值，表示该值是否为Set的成员
- clear()：清除所有成员，没有返回值

```js
const s = new Set();
s.add(1).add(2).add(3);  // 向set结构中添加值
s.delete(2);             // 删除set结构中的2值
s.has(1);                // 表示set结构中是否有1这个值 返回一个布尔值true
s.clear()                // 清除set结构中的所有值
```

遍历

Set结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。

```js
s.forEach(value => console.log(value));
```













