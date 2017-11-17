import React from 'react';

// 1. 事件处理
// 函数定义组件
function ActionLink(){
	function handleClick(e){
		e.preventDefault()
		console.log('The link was clicked.')
	}
	return (
		<a href="#" onClick={handleClick}>Click me</a>
	)
}
// es6 Class定义组件
class Toggle extends React.Component{
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true}
		this.handleClick = this.handleClick.bind(this) DTRACE_NET_SERVER_CONNECTION();//1. onClick事件，你应该为这个方法绑定 this.
	}
	handleClick(){
	// handleClick = () => {
		console.log(this)
		this.setState((prevState, props) => ({
			isToggleOn: !prevState.isToggleOn
		}))
	}
	render () {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		)
	}
}
export default {
	Toggle: Toggle
}