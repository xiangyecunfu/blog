---
  title: React基础面试题
  date: 2024-6-3
  tags: 
    - 前端
    - 面试
    - React
  description: React基础面试题
  author: 一心只想回农村
---

[[toc]]

## 1. React和ReactDom两个包分别有什么作用？
1. react: 这是React库的核心， 它定义了React组件的创建和生命周期方法，以及React元素概念。可以视作React的“引擎”。
2. react-dom: 这个库提供了在浏览器环境中使用React的方法， 例如将React组件渲染到DOM中，或者在DOM中触发React组件的更新。可以将其视为React的“驱动程序"
3. react-dom/client 是浏览器渲染用的库， 同理node端也有对应的库。

## 2. React组件的渲染过程是怎样的？
1. 组件的渲染过程分为两个阶段：
    1. 挂载阶段（Mounting）：将组件渲染为DOM元素，并将其插入到页面中。
    2. 更新阶段（Updating）：当组件的state或props发生变化时，React会重新渲染组件，并更新DOM元素以反映新的状态或属性。
2. 组件的渲染过程涉及以下步骤：
    1. 调用组件的render方法，生成虚拟DOM。
    2. 将虚拟DOM转换为真实的DOM元素，并插入到页面中。
    3. 当组件的state或props发生变化时，React会重新调用render方法，生成新的虚拟DOM。
    4. 将新的虚拟DOM与原始的虚拟DOM进行比较，确定需要更新的部分。
    5. 更新需要更新的DOM元素，以反映新的状态或属性。

## 3. React中的虚拟DOM是什么，它的作用是什么？
1. 虚拟DOM是React中的一种抽象概念，它表示一个虚拟的DOM元素，而不是实际的DOM元素。
2. 虚拟DOM的主要作用是提高React的性能和效率。当React渲染一个组件时，它会首先将该组件转换为虚拟DOM，然后将虚拟DOM与之前渲染的虚拟DOM进行比较，确定需要更新的部分，最后将需要更新的部分更新到实际的DOM元素中。
3. 虚拟DOM还可以用于跨平台渲染，例如在React Native中，虚拟DOM可以被转换为原生平台的UI组件。

## 4. React中的setState方法有什么作用？
1. setState方法用于更新组件的state。当调用setState方法时，React会自动将新的state与之前的state进行合并，并触发组件的重新渲染。
2. setState方法可以接收一个回调函数作为参数，该回调函数会在setState方法完成并重新渲染组件后被调用。
3. setState方法是异步的，这意味着在调用setState方法后，组件的state不会立即更新，而是会被缓存起来，并在下一次渲染时一起更新。
4. setState方法还可以接收一个函数作为参数，该函数接收一个prevState作为参数，表示更新前的state。

## 5. React中的生命周期方法有哪些？它们的作用是什么？
1. 组件的挂载阶段（Mounting）：
    1. constructor：用于初始化组件的state和其他属性。
    2. componentWillMount：在组件挂载到DOM之前执行，可以用于执行一些副作用操作，例如发送网络请求。
    3. render：用于生成虚拟DOM，不能在render方法中执行任何副作用操作。
    4. componentDidMount：在组件挂载到DOM之后执行，可以用于执行一些副作用操作，例如获取DOM元素或发起网络请求。
2. 组件的更新阶段（Updating）：
    1. componentWillReceiveProps：在组件接收到新的props之前执行，可以用于执行一些副作用操作，例如根据新的props更新state。
    2. shouldComponentUpdate：在组件接收到新的props或state之前执行，用于确定是否需要重新渲染组件。
    3. componentWillUpdate：在组件接收到新的props或state之后，但在重新渲染之前执行，可以用于执行一些副作用操作，例如根据新的props或state更新state。
    4. render：用于生成虚拟DOM，不能在render方法中执行任何副作用操作。
    5. componentDidUpdate：在组件重新渲染并更新到DOM之后执行，可以用于执行一些副作用操作，例如根据新的props或state更新state。
3. 组件的卸载阶段（Unmounting）：
    1. componentWillUnmount：在组件卸载之前执行，可以用于执行一些副作用操作，例如清除定时器或取消网络请求。

## 6. React中的refs是什么，它的作用是什么？
  1. refs是React提供的一种机制，用于获取组件实例或DOM元素实例。
  2. refs可以通过在组件中定义一个ref属性，并在需要时通过this.refs.refName来访问组件实例或DOM元素实例。
  3. refs可以用于执行一些副作用操作，例如获取DOM元素或触发事件。
  4. refs也可以用于在组件之间传递信息，例如通过refs传递数据或触发事件。

## 7. React中的key是什么，它的作用是什么？
  1. key是React中的一种特殊属性，用于标识组件的唯一性。
  2. key可以在渲染列表时使用，用于确定列表中每个元素的唯一性。
  3. key可以帮助React优化渲染性能，提高组件的响应速度。
  4. key还可以用于在组件之间传递信息，例如通过key传递数据或触发事件。

## 8. React中的props是什么，它的作用是什么？
  1. props是React中的一种特殊属性，用于传递数据给组件。
  2. props可以在组件中使用，用于获取传递的数据。
  3. props还可以用于在组件之间传递信息，例如通过props传递数据或触发事件。

## 9. React中的state是什么，它的作用是什么？
  1. state是React中的一种特殊属性，用于表示组件的状态。
  2. state可以在组件中使用，用于获取和更新组件的状态。
  3. state还可以用于在组件之间传递信息，例如通过state传递数据或触发事件。

## 10. React为什么有多个包？ React是框架吗？
1. 为了功能解耦，渲染有渲染的专用包， 引擎就只负责引擎
2. React的核心， 其实就是一个渲染的库。

## 11. 严格模式的作用？
1. 不安全的生命周期方法： 某些生命周期方法在未来的React版本中将被弃用。 严格模式会告警这些不安全方法的使用。
2. 使用过时或遗留的API：严格模式会警告使用过时或遗留的API；
3. 意外的副作用： 严格模式可以帮助你发现组件中可能的意外副作用；
4. 与旧版本React不兼容的代码： 严格模式会警告你的代码中可能与未来版本的React不兼容的部分。

## 12. *JSX*的作用？
1. 可以在js中返回dom，经过babel编译成js认识的代码。
2. 接收两个参数：第一个参数：标签名；第二个参数：子元素以及标签上的一些属性。
3. 使用_jsx方法进行编译， 这个是来自react底层`react/jsx-runtime`。
> [babel.j在线网址](https://babeljs.io/)

## 13. 虚拟DOM是什么？
1. 虚拟DOM是一种用于描述真实DOM的JavaScript对象。
2. 虚拟DOM可以用于描述DOM的结构、属性、样式等，并且可以进行高效的比较和更新。
3. 虚拟DOM可以提高性能和效率，减少对真实DOM的频繁操作。

## 14. 虚拟DOM的优点是什么？
1. 虚拟DOM可以提高性能和效率，减少对真实DOM的频繁操作。
2. 跨平台

## 15. getDerivedStateFromProps的作用是什么？
它的返回值，会对state进行相同属性覆盖修改， 如果没有和state属性相同的就不做修改。

1. **执行时机**：挂载和更新都会更新，在render之前。
2. **使用场景：** 进行某些值进行转化（列如后端返回数字状态，前端使用中文显示）。
3. **注意事项：** 不要在getDerivedStateFromProps中使用setState，否则会死循环。

## 16.  getSnapshotBeforeUpdate的特点？
1. **执行时机：** 只会在更新的时候执行，在render之后，浏览器页面更新之前。
2. **作用：** 返回值可以传递给componentDidUpdate。
3. **使用场景：** 长列表，需要不断往里面塞入内容。更新之前，记录滚动的位置，传递给`componentDidUpdate`保持滚轮的位置。 `getSnapshotBeforeUpdate`更新之前记录滚轮的原始位置，并将原始位置通过`return`给`componentDidUpdate`。`componentDidUpdate`就使用原始的位置更新DOM，保证滚轮不会变化..。

## 17.  React的更新是同步还是异步？ 为什么？
1. 更新是异步的。
2. 因为React的更新底层的（微任务）异步队列，会将短时间js对组件的修改进行合并，1次完成渲染。

## 18. useEffect和useLayoutEffect的区别是什么？
![React渲染流程图](~@img/react-1.png)

1. 从上图就可以看出， 在js修改dom前会调用`useEffect`， 会在单独开辟一个任务队列来执行`useEffect`, 这样它就不会阻塞浏览器的渲染；而`useLayoutEffect`则是在dom修改结束后，浏览器开始渲染前执行，这样就会导致出现阻塞浏览器渲染。

2. **<font color="#0286df">useLayoutEffect</font>** 的应用场景：在处理一些js动画时， 可以使用它来提前把动画位置确认，这样就避免在一定情况下出现闪烁或者跳动的问题。

## 19. 什么地方使用useMemo？
::: tip
在项目中一定是不得已用才使用（已经明显出现了问题）。
:::
1. `useMemo`本身有性能消耗，缓存消耗内存，`uesMemo`自身状态维护也是有性能消耗的；
2. `useMemo`会增加开发成本，代码变得很复杂不好维护；
3. React官方未来会取消`useMemo`这个钩子。

## 20. React渲染规律？
只要父组件进行了`setState`,父组件本身会重新render，所有子组件也会重新render。也就是所谓得全局更新。

## 21. useMemo和useCallback的区别？
实际上没有本质区别，只是一个用于缓存数据， 一个用于缓存函数。 纯粹为了代码的可维护性。

## 22. forwardRef的作用？
1. 实际上函数式组件没有ref的。
2. 我们想获取函数式组件内部的某个dom的实例，那么就可以使用forwardRef转发出去。

## 23. useContext的作用？
1. 主要用于跨组件通信。
2. 核心是父组件使用`Provider`包裹，给所有的子组件注入上下文。
3. 子孙组件可以使用`useContext`拿到顶层组件注入的值。
4. 一般修改状态，可以把状态和修改函数一起注入。

## 24. React的并发更新是什么？
1. fiber框架， 分片更新 => 异步更新
2. 组件渲染过程，实际上是js的执行，因为js执行不可中断，所以导致如果一个组件特别消耗js，就会卡住渲染。
3. fiber架构 => 数据机构(深度优先遍历) => 细粒度的拆分任务
  - 三个属性： child parent sibling
  - 浏览器的空闲时间：requestIdleCallback
::: tip
requestIdleCallback兼容性不好，React目前使用PostMessage模拟实现的，它是宏任务的异步。
:::

## 25. useTransition 和 useDeferredValue的区别是什么？
1. 解决的问题是一样的。
2. 只是应用场景有点细微的区别。
3. 一般`useDeferredValue`比较适合用于组件接收的`Props`参数导致的渲染缓慢优化。
4. `useTransition`适用于组件内部本身的性能优化。

## 26. React的hook一定要写在顶层作用域吗？
不是，比如use这个hook，这是一个特殊的存在。

## 27. useDebugValue的作用？
可以使用调试工具，做组件基本的`debug`, 记得开启严格模式。