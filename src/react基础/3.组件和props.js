import React from 'react';
// 组件可以将UI切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件。
// 组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素。


// 1.函数定义/类定义组件

function WelcomeFn(props) {  //函数定义
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component { //类定义组件
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 警告:
// 组件名称必须以大写字母开头。

// 在前面，我们遇到的React元素都只是DOM标签：
const element = <div />;

// React元素也可以是用户自定义的组件：
const element2 = <Welcome name="Sara" />;

// 2. 组件渲染
// 看index。js 的渲染部分

// 3. 组合组件
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}


// 4. 提取组件
function formatData(date){
	return date.toLocaleTimeString()
}
function Comment (props) {
	return (
		<div className="Comment">
			<Auatar user={props.author}/>
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatData(props.date)}
			</div>
		</div>	
	)
}

const comment = {
	date: new Date(),
	text: 'I hope you enjoy learning React!',
	author: {
		name: 'hello yoko',
		url: '/image/star1.png'
	}
}

function Auatar(props){
	return (
		<div className="UserInfo">
			<img className="Avatar"
				src={props.user.url}
				alt={props.user.name}
			/>
			<div className="UserInfo-name">{props.user.name}</div>
		</div>
	)
}

// 5. Props的只读性
// 无论是使用函数或是类来声明一个组件，它决不能修改它自己的props
// Props的只读性 所有的React组件必须像纯函数那样使用它们的props。
function sum (a, b){
	return a + b
}

export default {
	element: element2,
	Welcome: Welcome,
	App: App,
	Comment: Comment
}