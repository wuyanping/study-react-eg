import React from "react"


// 组合 vs 继承
// 1 包含关系
// JSX 标签内的任何内容都将通过 children 属性传入 
function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
	)
}

function WelcomDialog() {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
			    Welcome
			</h1>
			<p className="Dialog-message">
				Thank you for visiting our spacecraft!
			</p>
		</FancyBorder>
	)
}

function SplitPane(props) {
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">
				{props.left}
			</div>
			<div className="SplitPane-right">
				{props.right}
			</div>
		</div>
	)
}

// 组件中有多个入口，这种情况下你可以使用自己约定的属性而不是 children：
function App3() {
	return (
		<SplitPane
			left={
				<div>left</div>
			}
			right={
				<div>right</div>
			}/>
	)
}

// 2 特殊实例
// WelcomeDialog 是 Dialog 的特殊实例。
function Dialog(props) {
	return (
		<FancyBorder>
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
			{props.children}
		</FancyBorder>
	)
} 

function WelcomeDialog2() {
	return (
		<Dialog title="Welcome" message="Thank you for visiting our spacecraft!"/>
	)
}

class SignUpDialog extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			login: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSignUp = this.handleSignUp.bind(this)
	}
	handleChange(e) {
		this.setState({
			login: e.target.value
		})
	}
	handleSignUp() {
		alert(`Welcome aboard, ${this.state.login}!`);
		// alert('Welcome aboard,' + this.state.login)
	}
	render() {
		return (
			<Dialog title="Welcome" message="Thank you for visiting our spacecraft!">
				<input type="text" value={this.state.login} onChange={this.handleChange}/>
				<button onClick={this.handleSignUp}>SignUp</button>
			</Dialog>
		)
	}	
}
export default {
	WelcomDialog: WelcomDialog,
	App3: App3,
	WelcomeDialog2: WelcomeDialog2,
	SignUpDialog: SignUpDialog
}