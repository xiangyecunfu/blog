---
categories:
- Vue
tags:
- Vue
- Pinia
- Vuex
- 状态管理
date: 2024-03-01 16:00:00
---

# Pinia和Vuex的差异性

## 前言
---

# Pinia 和 Vuex的差异性

## 前言

近期在写Vue3项目，在使用Pinia进行状态管理，在实际使用过程中，比Vuex舒服很多，也减少了很多代码的书写。这种差异特别是在实际项目中尤为明显，个人在公司项目中，因为涉及到协同问题，所以每个人都要自己的想法，有的人会根据特有的业务模块进行分模块进行存储状态，而有的人更喜欢集中在主模块中存储，这样在实际开发过程中会有很大的心智负担，而Pinia这块则没有。

## 官方说明

在Pinia官方文档中提到，Vue团队在开发Vuex@5的时候，Pinia已经实现了很多Vuex@5中的大部分功能，故将Pinia作为Vuex的新方案。

与 Vuex 相比，Pinia 不仅提供了一个更简单的 API，也提供了符合组合式 API 风格的 API，最重要的是，搭配 TypeScript 一起使用时有非常可靠的类型推断支持。

## 两者差异性

Vuex和Pinia存在以下差异性：

1. Vuex只有一个store，Pinia是多store的
2. Vuex是使用命名空间进行模块化区分，并使用核心model来进行组合，Pinia则是使用一个id来标记store
3. Pinia删除了Vuex中冗余的mutation
4. 更新状态差异性，Vuex需要在mutation中使用commit进行状态更新，而Pinia不需要
5. action中更新方式发生变化，Pinia直接更新，不需要像Vuex借助mutation进行触发更新。

## 代码示例

### Vuex中的使用方式

```javascript
// 创建store的入口文件
import { createStore } from 'vuex'
import moduleA from './moduleA'
import moduleB form './moduleB'
// 导出store， 使用module合并模块
export default createStore({
	modules: {
		moduleA,
		moduleB
	}
})
// 每个模块的写法
// 定义初始状态
const state = （） => ({
	count: 0
})；
// getters
const getters = {
	doubleCount = (state,getter) => {
		return state.count * 2
	}
}
// mutation 
const mutations = {
    SET_COUNT: (state, num) => {
        state.count = num
    }
}
// actions
const actions= {
    editCount ({commit}, num) {
        commit('SET_COUNT', num)
    }
}
// 导出
export default {
    namespaced: true, // 是否设置命名空间
    state,
    getters,
    mutations
    actions
}
// component - 触发异步更新
this.$store.dispatch('editCount')
```

### Pinia中使用的方式

```javascript
import { defineStore } from 'pinia'
export const useCounterStore =defineStore({
	'counter', // store的唯一id， 类似命名空间的作用
	state: () => ({count：0}),
	getter: (state) => state.count * 2,
	actions: {
		increment() {
      		this.count++
    	},
	}
})

// component 
import { useCounterStore } from '@/stores'
const counter = useCounterStore()
const { count } = storeToRefs(counter) // 使用结构方式需要storeToRefs包裹让其不失去响应式
const click = () => {
	counter.increment() // 不管同步还是异步都可以触发
}
```

## 结语

这里就简单介绍这些写法上的差异性吧，其实Pinia还是有很多和Vuex相同的函数方式，本篇幅有限， 就不一一介绍，需要的就各自去研究。整体上Pinia更加简洁，而且TS支持效果也更佳。