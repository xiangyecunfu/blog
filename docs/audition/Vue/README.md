---
  title: Vue面试题
  author: 一心只想回农村
  date: 2024-6-7
  tags:
    - Vue
    - Vuex
    - Vue-router
    - Pinia
    - Vue3
---

[[toc]]

## 1. 什么是MVVM设计模式？

&emsp;MVVM是Model-View-ViewModel的缩写。它是一种基于前端开发的架构模式。在前端开发中，MVVM主要用来分离视图（View）和模型（Model），将视图和模型解耦，从而让它们可以独立地变化。MVVM的主要思想是：将数据绑定到视图上，当数据发生变化时，视图会自动更新；当视图发生变化时，数据也会自动更新。这样，开发人员只需要关注数据的操作，而无需手动更新视图。

## 2. Vue中的生命周期？   
1. beforeCreate：在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
2. created：在实例创建完成后被立即调用。
3. beforeMount：在挂载开始之前被调用：相关的 render 函数首次被调用。
4. mounted：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
5. beforeUpdate：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
6. updated：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
7. beforeDestroy：实例销毁之前调用。
8. destroyed：实例销毁后调用。
9. activated：keep-alive 组件激活时调用。
10. deactivated：keep-alive 组件停用时调用。<br/>
在vue3中为了更贴合`Composition API`, 将`beforeDestroy`和`destroyed`改名为`beforeUnmount`和`unmounted`。
新增了`onBeforeMount`、`onMounted`、`onBeforeUpdate`、`onUpdated`、`onBeforeUnmount`和`onUnmounted`。
<div class="image-box">
  <img
    src="https://cn.vuejs.org/assets/lifecycle_zh-CN.W0MNXI0C.png"
    alt="vue3生命周期图"
  />
  <p>vue3生命周期图</p>
</div>
<div class="image-box">
  <img
    src="https://v2.cn.vuejs.org/images/lifecycle.png"
    alt="vue2生命周期图"
  />
  <p>vue2生命周期图</p>
</div>

## 3. Vue中的指令有那些？ 自定义指令你是否知道？
1. v-text：更新元素的 textContent。
2. v-html：更新元素的 innerHTML。
3. v-show：根据表达式之真假值，切换元素的 display CSS 属性。
4. v-if：根据表达式之真假值，销毁或重建元素。
5. v-else：前一个元素为 v-if 或者 v-else-if。
6. v-else-if：前一个元素为 v-if 或者 v-else-if。
7. v-for：基于源数据多次渲染元素或模板块。
8. v-on：监听 DOM 事件，并在触发时运行一些 JavaScript 代码。
9. v-bind：将一个表达式的值绑定到 DOM 元素的特性上。
10. v-model：在表单控件或者组件上创建双向数据绑定。
11. v-pre：跳过这个元素和它的子元素。
12. v-cloak：保持在元素上直到关联实例结束编译。
13. v-once：只渲染元素和组件一次。
14. v-memo：在渲染元素时，为元素及其子元素保留旧的状态。
15. v-slot：提供具名插槽，用于在渲染子组件时，向子组件传递内容。

## 4. Vue中的通讯方式有那些？
1. 父子组件通信： props、emit、$attr
2. 跨组件通信： Vuex、pinia、 eventBus、provide/inject

## 5. Vue中的修饰符有那些？
1. **表单修饰符：**
   - .lazy：取代 input 监听 change 事件
   - .number：输入字符串转为有效的数字
   - .trim：输入首尾空格过滤
2. **鼠标按钮修饰符：**
   - .left：鼠标左键
   - .right：鼠标右键
   - .middle：鼠标中键
3. **事件修饰符：**
   - .stop：阻止事件冒泡。
   - .prevent：阻止默认事件。
   - .capture：添加事件监听器时使用 capture 模式。
   - .self：只当事件是从侦听器绑定的元素本身触发时才触发回调。
   - .once：只触发一次回调。
   - .passive：滚动事件的默认行为 (即滚动行为) 将会立即触发。

## 6. v-if和v-show的区别？
1. v-if是当条件为真时进行渲染，条件为假时不进行渲染。
2. v-show时当条件为真时进行渲染，条件为假时将元素隐藏， 主要通过css属性display：block/none来实现。
> v-if初始渲染时有很大的性能开销， 因为它时需要创建和销毁DOM元素。
  v-show的初始渲染性能开销很小，因为DOM始终存在。
  因此v-if有更高的切换开销，而v-show有更高的初始渲染开销。
  频繁的场景使用v-show，不频繁的场景使用v-if。
 
## 7. v-if能和v-for一起使用吗？
1. vue2中能，但是不推荐，因为v-for的优先级比v-if更高。这样每一个元素都会进行判断，导致性能下降。
2. vue3中不能，因为v-if的优先级比v-for更高。这样会导致v-for失效。需要在外面包裹一层template标签。

## 8. 组件中data为什么是一个函数而不是一个对象？
1. 组件是可复用的Vue实例，因此需要用一个函数来保证每个实例都有它自己的数据。
2. 组件中的data必须是一个函数，因为组件可能被用来创建多个实例。如果data是对象的话，就会造成所有实例共用一份data的引用，从而导致一个实例修改data时，其他实例也会受到影响。

## 9. 请说下父子组件渲染的流程是怎么样的？
1. 加载渲染过程:父 beforeCreate ->父 created ->父 beforeMount->子beforeCreate ->子created ->子beforeMount ->子mounted ->父 mounted
2. 子组件更新过程:父 beforeUpdate ->子 beforeUpdate ->子updated -> 父 updated
3. 父组件更新过程:父 beforeUpdate ->父 updated
4. 销毁过程:父 beforeDestroy->子beforeDestroy ->子destroyed ->父 destroyed

## 10. Vue中computed和watch的区别是什么？
1. **computed**
  - **计算属性:** computed 是用于创建计算属性的方式，它依赖于Vue的响应式系统来进行数据追踪。当依赖的数据发生变化时，计算属性会自动重新计算，而且只在必要时才重新计算。
  - **缓存:** 计算属性具有缓存机制，只有在它依赖的数据发生变化时，计算属性才会重新计算。这意味着多次访问同一个计算属性会返回相同的结果，而不会重复计算。
  - **无副作用:** 计算属性应当是无副作用的，它们只是基于数据的计算，并不会修改数据本身。
  - **用于模板中:** 计算属性通常用于模板中，以便在模板中显示派生数据。
  - **必须同步:** 只对同步代码中的依赖响应。
2. **watch**
  - **侦听数据:** `watch`用于监视数据的变化，你可以监视一个或多个数据的变化，以执行自定义的响应操作。
  - **副作用操作:** `watch`中的回调函数可以执行副作用操作，例如发送网络请求、手动操作DOM，或执行其他需要的逻辑。
  - **不缓存:** `watch`中的回调函数会在依赖数据变化时立即被触发，不会像 computed 那样具有缓存机制。
  - **用于监听数据变化:** `watch`通常用于监听数据的变化，而不是用于在模板中显示数据,
  - **支持异步:** 在检测数据变化后，可进行同步或异步操作,

## 12. Vue中的插槽是什么？

## 13. Vue的$nextTick是如何实现的？
- 当调用`this.$nextTick(cal1back)`时，会将`callback`函数存储在一个队列中，以便稍后执行。
- 检查当前是否正在进行 DOM 更新周期。如果是，它会将callback 函数推到一个专门用于在更新周期结束后执行的队列中。
- 如果当前不在 DOM 更新周期中，`Vue.js`会使用`JavaScript`的`Promise`或者`Mutationobserver`，具体取决于浏览器的支持情况，来创建一个微任务(microtask)。
- 微任务是`JavaScript`引擎在执行栈清空后立即执行的任务。因此`callback`函数会在下一个微任务中被执行，这就确保了它在下一次 DOM 更新周期之前执行。
- 一旦当前的执行栈清空，JavaScript 引擎就会检查并执行微任务队列中的任务，其中包括 $nextTick 的回调函数。

## 14. Vue2和Vue3的具体区别是什么？
1. **响应式系统:**
  - Vue 2 使用 object.defineProperty 来实现其响应式系统。这种方法有一些限制，例如无法检测属性的添加或删除，以及无法直接处理数组索引和长度的变化。
  - Vue 3 则采用了基于 ES6 Proxy 的响应式系统，这允许 Vue 拦截对象的任何属性的读取和写入操作，提供更强大和灵活的响应式能力。这也使得 Vue 3 能够检测属性的添加和删除，以及更有效地处理数组更新。
2. **组合式 API:**
  - Vue2主要通过选项式API(如`data`、`methods`、`computed`等)进行组件的逻辑组织。
  - Vue3引入了组合式API(如`ref`、`reactive`、`computed`、`watch`)，这为逻辑复用和代码组织提供了更灵活的方式。
3. **性能相关:**
  - Vue3在性能方面有显著提升。它包括更小的打包大小、更快的虚拟 DOM 重写、更高效的组件初始化等。
  - Vue2相比之下在性能方面相对较慢，尤其是在处理大型应用和复杂组件时。
4. **TypeScript支持:**
  - Vue3从一开始就以`TypeScript`编写，提供更好的`Typescript`支持
  - Vue2对`TypeScript`的支持是有限的，通常需要额外的配置和工具来实现更好的集成。
5. **新特性和改进:**
  - Vue3引入了多个新特性，如`Teleport`、`Fragment`、`Suspense`等，为开发提供了更多的可能性和便利。
6. **Fragment:**
  - Vue3允许多个根节点(Fragment)，这使得组件模板可以有多个并列的根元素。
  - Vue2要求每个组件必须有一个单独的根节点。


## 15. Vue3为什么要使用proxy替换Object.defineProperty?
Vue3在设计上选择使用`Proxy`替代`Object.defineProperty`主要是为了提供更好的响应性和性能。
`Obiect.defineProperty`是在 ES5 中引入的属性定义方法，用于对对象的属性进行劫持和拦截。Vue 2.x 使用`Object.defineProperty`来实现对数据的劫持，从而实现响应式数据的更新和依赖追踪。
  - `Object.defineProperty`只能对已经存在的属性进行劫持，无法拦截新增的属性和删除的属性。这就意味着在 Vue 2.x 中，当你添加或删除属性时，需要使用特定的方法( vue.set 和 vue.delete )来通知 Vue 响应式系统进行更新。这种限制增加了开发的复杂性。
  - `Object.defineProperty`的劫持是基于属性级别的，也就是说每个属性都需要被劫持。这对于大规模的对象或数组来说，会导致性能下降。因为每个属性都需要添加劫持逻辑，这会增加内存消耗和初始化时间。
  - 相比之下,`Proxy`是ES6中引入的元编程特性，可以对整个对象进行拦截和代理。Proxy 提供了更强大和灵活的拦截能力，可以拦截对象的读取、赋值、删除等操作。Vue 3.x利用 Proxy 的特性，可以更方便地实现响应式系统。
  - 使用`Proxy`可以解决`Object.defineProperty`的限制问题。它可以直接拦截对象的读取和赋值操作，无需在每个属性上进行劫持。这样就消除了属性级别的劫持开销，提高了初始化性能。另外，Proxy 还可以拦截新增属性和删除属性的操作，使得响应式系统更加完备和自动化。

## 16. Vue3中ref和reactive的区别？

## 17. 请说下Vue中的Diff算法？

## 18. Vuex和Pinia的区别？

## 19. Vue中如何做权限管理？

## 20. Vue-Router 4.x的路由模式？
1. hash模式：使用`createWebHashHistory()`进行创建，路由中会使用`#`进行分割，不利于SEO。
2. HTML5模式：使用`createWebHistory()`进行创建，也推荐使用这种方式。
3. memory模式：这个是用于在服务端渲染使用的，这个路由地址不会发生变化也不会记录路由地址。使用`createMemoryHistory()`进行创建的。
