import React from 'react';
// 1.. 元素渲染
// 1.1 元素是构成 React 应用的最小单位。
const e = <h1>Hello, world!</h1>
// 1.2 将元素渲染到 DOM 中
// 元素传入一个名为 ReactDOM.render() 的方法来将其渲染到页面上


// 1.3 更新元素渲染
// React 元素都是immutable 不可变的。当元素被创建之后，你是无法改变其内容或属性的。一个元素就好像是动画里的一帧，它代表应用界面在某一时间点的样子。

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000)

// 1.4 React 只会更新必要的部分
// React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分