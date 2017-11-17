import React from 'react';
// 1.JSX 简介
const e = <h1>Hello, world!</h1>
// 1.1 既不是字符串也不是HTML.是jsx， 一种 JavaScript 的语法扩展

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


const user = {
  firstName: 'wu',
  lastName: 'yanping',
  avatarUrl: '/image/star1.png'
}


// 1.2 可以任意地在 JSX 当中使用 JavaScript 表达式，在 JSX 当中的表达式要包含在大括号里。
const hEle = <h1>hello, {formatName(user)}</h1>

function getGreeting(user) {
	if (user) {
		return <h1>hello, {formatName(user)}</h1>
	} else {
		return <h1>hello, Stranger</h1>
	}
}

// 1.3 JSX 代表 Objects
	// Babel 转义器会把 JSX 转换成一个名为 React.createElement() 的方法调用。

// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// )
// 
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// )
// 之后会返回一个类似下面例子的对象：
// // 注意: 以下示例是简化过的（不代表在 React 源码中是这样）
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world'
//   }
// }
// 这样的对象被称为 “React 元素”。它代表所有你在屏幕上看到的东西。React 通过读取这些对象来构建 DOM 并保持数据内容一致。
export default {
	hEle: hEle,
	getGreeting: getGreeting
}