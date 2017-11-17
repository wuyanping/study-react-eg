import React from 'react';

// 深入 JSX
// 1.指定 React 元素类型
// JSX 的标签名决定了 React 元素的类型。
// 大写开头的 JSX 标签表示一个 React 组件。这些标签将会被编译为同名变量并被引用，所以如果你使用了 <Foo /> 表达式，则必须在作用域中先声明 Foo 变量。

// React 必须声明
// import React from 'react';

// 1.1. 点表示法
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

// 1.2. 首字母大写
// 当元素类型以小写字母开头时，它表示一个内置的组件，如 <div> 或 <span>，并将字符串 ‘div’ 或 ‘span’ 传 递给 React.createElement。 以大写字母开头的类型，如 <Foo /> 编译为 React.createElement(Foo)，并它正对应于你在 JavaScript 文件中定义或导入的组件。


// 2. 属性 
// (在 JSX 中有几种不同的方式来指定属性)
// 2.1. 使用 JavaScript 表达式
const number = 10

function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
// <NumberDescriber number={number}/>

// 2.2 字符串常量
// <NumberDescriber message="hello world" />
 // <==>
// <NumberDescriber message={'hello world'} />

// 2.3 默认为 True
// <NumberDescriber autocomplete />
 // <==>
// <NumberDescriber autocomplete={true} />

// 2.4 扩展属性
function Greeting(props) {
	return (
		<div>{props.firstName} {props.lastName}</div>
	)
}
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}
 // <==>  使用 ... 作为扩展操作符来传递整个属性对象
function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

// 3. 子代
// 3.1 字符串常量
// 标记之间的内容作为特殊的参数传递：props.children。

// 3.2 JSX
// 查看react基础 10

// 3.3 JavsScript 表达式
// 你可以将任何 {} 包裹的 JavaScript 表达式作为子代传递
// <NumberDescriber>foo</MyComponent>
 // <==>
// <NumberDescriber>{'foo'}</MyComponent>

// 3.4 函数
// 插入 JSX 中的 JavsScript 表达式将被认作字符串、React 元素或这些内容的列表
// 
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
export default {
	BlueDatePicker: BlueDatePicker,
	App2: App2,
	ListOfTenThings: ListOfTenThings
}
