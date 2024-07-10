---
  title: JavaScript面试题
  author: 一心只想回农村
  date: 2024-6-7
    - 面试
  tags:
    - JavaScript
    - 面试
    - 前端
---

[[toc]]

## 1. JavaScript 中的数据类型有哪些？

1. 基本数据类型：Number、String、Boolean、null、undefined、Symbol、BigInt
2. 引用数据类型：Object、Array、Function

## 2. 什么是闭包？
1. **定义**:闭包是指引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。
2. **作用**:闭包可以保留其被定义时的作用域，这意味着闭包内部可以访问外部函数的局部变量，即使外部函数已经执行完毕。这种特性使得闭包可以在后续调用中使用这些变量。
> 注意:<br/>&emsp;闭包会使得函数内部的变量在函数执行后仍然存在于内存中，直到没有任何引用指向闭包。如果不注意管理闭包，可能会导致内存泄漏问题。
3. **案例：**
  ```js
  const accumulation =function(initValue = 0) {
    let result= initValue;
    return function(value){
      result += value;
      return result;
    }
  }
  ```
  ```js
  for (let i = ; i < 10; i++) {
    (function(index){
      setTimeout(function(){
        console.log(index);
      }, 1000);
    })(i);
  }
  ```
    
## 3. JavaScript中的原型链。
1. **定义：** 每个对象（除null外）都有一个内部链接到另外一个对象，这个对象成为原型对象，原型对象也有自己的原型， 这样一层一层的链接下去，这个链就称为原型链；
2. **原型链的作用：** 用于实现继承和共享属性的机制。

## 4. 解释一下 JavaScript 中的作用域和作用域链。
1. **作用域**: 是指程序源代码中定义变量的区域，分为全局作用域和局部作用域。
2. **作用域链**: 是指由多个作用域组成的链，用于查找变量。
3. **作用域链的查找过程：** 首先在当前作用域中查找变量，如果找不到则向上级作用域中查找，直到找到全局作用域为止。如果仍然找不到，则报错。

## 5. 请说下JavaScript中的this指向问题？
1. 全局作用域中，this指向全局对象。(浏览器中指向window对象，Node中指向global对象)。
2. 函数作用域中，this指向调用函数的对象。
3. 对象方法中，this指向调用该方法的对象。
4. 构造函数中，this指向新创建的对象。
5. 使用apply、call或bind方法时，this指向指定的对象。
6. 在事件处理函数中，this指向触发该事件的元素。
7. 在箭头函数中，this指向定义时所在的上下文。

## 6. 请解释JavaScript中的call、apply和bind方法的区别？
1. call、apply和bind方法都是用来改变函数的this指向的。
2. call和apply方法的区别在于参数传递的方式不同。call方法接受多个参数，apply方法接受一个包含多个参数的数组。
3. bind方法会创建一个新的函数，而新函数的this指向bind中传入的上下文。
4. call和apply方法都会立即执行函数，而bind方法会返回一个新的函数，需要手动调用。
::: details 手写实现
  ```javascript
  Fuction.prototype.myCall = function(cxt, ...args) {
    cxt = cxt || globalThis 
    const uniqueKey = Symbol(); // 创建唯一键
    cxt[uniqueKey] = this; // 将当前函数赋值给上下文对象
    const result = cxt[uniqueKey](...args); // 调用函数
    delete cxt[uniqueKey]; // 删除上下文对象中的函数
    return result;
  }
  ```
  ```javascript
  Function.prototype.myApply = function(cxt, args) {
    cxt = cxt || globalThis;
    const uniqueKey = Symbol();
    // 判断args是否是数组
    if (args && !Array.isArray(args) && typeof args !== 'object') {
      throw new Error('arguments must be an array');
      return;
    }
    const uniqueKey = Symbol();
    cxt[uniqueKey] = this;
    const result = args ? cxt[uniqueKey](...args) : cxt[uniqueKey]();
    delete cxt[uniqueKey];
    return result;
  }
  ```
  ```javascript
  Function.prototype.myBind = function(cxt, ...args) {
    const fn = this; // 保存原函数使用
    return function (...newArgs) {
      return fn.apply(cxt, args.concat(newArgs))
    }
  }
  ```
:::

## 7. 数组中有那些方法？
| 分类 | 涉及方法 | 副作用 |
| --- | --- | --- |
| 增删 | push、pop、 shift、unshift  | 会改变原数组 |
| 重排序方法 | reverse、sort | 会改变原数组 |
| 操作方法 | concat、slice、splice | concat、slice是返回新数组，splice则会改变原数组 |
| 位置方法 | indexOf、lastIndexOf、find、at | 用于查找，不影响原数组 |
| 迭代方法 | forEach、map、filter、some、every | 用于遍历，不影响原数组 |
| 归并方法 | reduce、reduceRight | 用于归并，不影响原数组 |
| 静态方法 | isArray、from、of | 用于创建数组，不影响原数组 |
| 转换方法 | toString、toLocaleString、toLocalDateString | 用于将数组转换为字符串，不影响原数组 |
| 填充方法 | fill | 用于填充数组，不影响原数组 |
| 查找方法 | findIndex、findLastIndex | 用于查找，不影响原数组 |
| 新方法 | toReversed、toSorted、toSpliced | 用于操作，不影响原数组 |
| 展开方法 | flat、flatMap | 用于展开数组，不影响原数组 |


## 8. 字符串中有那些方法？
| 分类 | 涉及方法 |
| --- | --- |
| 字符串操作 | slice、substring、substr |
| 字符串查找 | indexOf、lastIndexOf、at、includes |
| 字符串截取 | trim、trimLeft、trimRight |
| 字符串大小写转换 | toLowerCase、toUpperCase、toLocaleLowerCase、toLocaleUpperCase |
| 字符串替换 | replace |
| 字符串模式匹配 | match、matchAll、search、split |
| 字符串格式化 | format |
| 字符串转换 | toString、valueOf |

## 9. 请讲一讲变量提升和函数提升是什么意思？
1. **变量提升：** 一般指的是通过var关键字声明的变量，在代码执行之前，变量就已经被声明并赋值为undefined。
2. **函数提升：** 一般指的是通过function关键字声明的函数，在代码执行之前，函数就已经被声明并赋值。
3. **变量提示和函数提升的区别：** 变量提升只提升变量的声明，而不提升变量的赋值；函数提升则既提升函数的声明，又提升函数的赋值。且函数提升优先级高于变量提升。
::: tip 
  **手写实现**
  ```javascript
  console.log(a) // [Funciton: a]
  var a = 20
  function a () {}
  console.log(a) // 20
  ```
:::

## 10. null 和 undefined 的区别是什么？
1. undefined
  - 当声明了一个变量但未初始化它时，它的值为undefined
  - 当访问对象属性或数组元素中不存在的属性或索引时，也会返回undefined
  - 当函数没有返回值时，默认返回undefined
  - 如果函数的参数没有传递或没有被提供值，函数内的对应参数的值为undefined
2. null
  - `null`是一个特殊的关键字，表示一个空对象指针。
  - 它通常用于显式地指示一个变量或属性的值是空的，`nu11`是一个赋值的操作，用来表示"没有值"或"空"
  - `nu11`通常需要开发人员主动分配给变量，而不是自动分配的默认值。
  - `nul1`是原型链的顶层:所有对象都继承自`Object`原型对象，`Object`原型对象的原型是`nu11`

## 11. new关键字做了那些事情？
1. 创建一个空对象，并链接到构造函数的原型。
2. 将构造函数的this指向对象并执行构造函数。
3. 确保构造函数返回的是一个对象，如果没有则返回一个新对象。
::: details 示例
  ```javascript
    function myNew(constructor, ...args) {
      const obj = Object.create(constructor.prototype);
      const result = constructor.apply(obj, args);
      return (typeof result === 'object' && result !== null) ? result : obj;
    }

    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    const person = myNew(Person, 'John', 30);
    console.log(person.name); // 'John'
    console.log(person.age); // 30
  ```
:::

## 12. 什么是惰性函数？
惰性函数是指在第一次调用时执行特定操作，之后将函数重写或修改，以便在以后的调用中直接返回缓存的结果而不再执行该操作。这通常用于性能优化，以避免重复执行开销较大的操作。
::: details 示例
  ```js
  /**
   *  这里是一个复制方法， 如果不使用惰性函数的时候， 我们每次进入分钟都需要进行逻辑判断，这样就带来了极大的性能消耗
   * 但是我们浏览器支持就后续不需要继续判断了，所以使用惰性函数， 这样后续进来就直接只执行一个就行。
   * */
  function createCopy (text) {
    // 判断浏览器是否支持新的方法
    if (window.isSecureContext && navigator.clipboard) {
      createCopy = function (text) {
        navigator.clipboard.writeText(text)
      }
    } else {
      createCopy = function (text) {
        const textArea = document.createElement('textarea')
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
    }
    return createCopy(text)
  }
  ```
:::

## 13. 防抖和节流？
1. 防抖
  - 防抖是指在事件被触发n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时, 直到事件触发完成。
  - 防抖的原理就是：在事件被触发n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时。
  - 防抖的应用场景：
    - 输入框的搜索联想功能
    - 手机号、邮箱的验证功能
    - 窗口大小Resize
    - 用户名、密码的验证功能
::: details 手写实现
```js
function debounce(fn, delay) {
  let timer
  return  (...args) => { // 这里使用箭头函数就不需要做this绑定了
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(args);
      timer = null;
    }, delay);
  }
}
```
:::
2. 节流
  - 节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
  - 节流的原理就是：在事件被触发n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时。
  - 节流的优点是：
    - 节流可以减少事件触发的频率，减少不必要的事件回调，优化性能。
    - 节流可以减少函数执行的次数，从而节省系统资源。
  - 节流的应用场景：
    - 鼠标连续触发resize或者scroll事件时，只认最后一次执行。
    - 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断。
    - 按钮的点击事件，防止用户点击太快，触发多次。
::: details 手写实现
```js
function throttle(fn, delay) {
  let timer
  return  (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
          fn(args);
          timer = null;
        }, delay);   
  }
}
```
:::

## 14. 请说下var、let和const的区别？
1. var
  - 声明变量，可以重复声明，存在变量提升，存在变量覆盖。
  - 作用域：全局作用域和函数作用域。
2. let
  - 声明变量，不可以重复声明，不存在变量提升，存在暂时性死区，不存在变量覆盖。
  - 作用域：全局作用域和块级作用域。
  - 场景：声明变量，防止变量覆盖，可以更改值。
3. const
  - 声明常量，不可以重复声明，不存在变量提升，存在暂时性死区，不存在变量覆盖。
  - 作用域：全局作用域和块级作用域。
  - 场景：常用于定义不可变的值或者常量。
