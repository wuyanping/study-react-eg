import React from 'react';
// 5. State & 生命周期   (功能只适用于类)
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// 5.1 将函数转换为类
	// 1.) 创建一个名称扩展为 React.Component 的ES6 类
	// 2.) 创建一个叫做render()的空方法
	// 3.) 将函数体移动到 render() 方法中
	// 4.) 在 render() 方法中，使用 this.props 替换 props
	// 5.) 删除剩余的空函数声明

// 5.2 this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()}
	}
	// 5.2生命周期钩子
	// componentWillUpdate(object nextProps, object nextState) //重新渲染
	// componentDidUpdate(object prevProps, object prevState)
	// componentWillUnmount() 已移出
	// componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
	// shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用
	componentDidMount () { //已插入
		this.timerID = setInterval(() => this.tick(), 1000)
	}
	componentWillUnmount() {
		clearInterval(this.timerID)
		console.log('Will---')
	}
	tick () {
		// 5.3 状态更新可能是异步的 
		// 要修复它，请使用第二种形式的 setState() 来接受一个函数而不是一个对象
		// this.setState({  //5.3.1 接受 对象
		// 	date: new Date()
		// })
		this.setState((prevState, props) => ({ //5.3.2 接受 箭头函数 (该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数：)
			date: new Date()
		}))
		// this.setState(function () {
		// 	return {date: new Date()} //5.3.3 接受 普通函数
		// })
		console.log('Did')
	}
	render () {
		return (
	      <div>
	        <h1>Hello, yoko!</h1>
	        <FormattedDate date={this.state.date}/>
	      </div>
	    )
	}
}

// 5.4 数据自顶向下流动 (组件可以选择将其状态作为属性传递给其子组件)
function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}</h2>
}


function App () {
	return (
		<div>
			<Clock/>
			<Clock/>
			<Clock/>
		</div>
	)
}
export default {
	App: App
}