import React from 'react';

// 条件渲染
// 
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// 1 元素变量
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component{
	constructor(props){
		super(props)
		this.handleLoginClick = this.handleLoginClick.bind(this)
		this.handleLogoutClick = this.handleLogoutClick.bind(this)
		this.state = {
			isLoggedIn: false
		}
	}
	handleLoginClick(){
		this.setState({
			isLoggedIn: true
		})
	}
	handleLogoutClick(){
		this.setState({
			isLoggedIn: false
		})
	}
	render(){
		const isLoggedIn = this.state.isLoggedIn
		let button = null
		if (this.state.isLoggedIn) {
			button = <LoginButton onClick={this.handleLogoutClick}/>
		} else {
			button = <LogoutButton onClick={this.handleLoginClick}/>
		}
		// 通过用花括号包裹代码在 JSX 中嵌入任何表达式
		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
				{isLoggedIn ? <LoginButton onClick={this.handleLogoutClick}/> : <LogoutButton onClick={this.handleLoginClick}/>}
			</div>
		)
	}
}

// 2 与运算符 &&
function Mailbox(props){
	const unreadMessages = props.unreadMessages
	// 是因为在 JavaScript 中，true && expression 总是返回 expression，而 false && expression 总是返回 false。
	return (
		<div>
			<h1>hello</h1>
			{unreadMessages.length > 0 &&
		        <h2>
		          You have {unreadMessages.length} unread messages.
		        </h2>
		     }
		</div>
	)
}
//注意： （即， 除了false 外，0，“”，null，undefined 和 NaN），它们依然会被渲染。
//要解决这个问题，请确保 && 前面的表达式始终为布尔值
//相反，如果你想让类似 false、true、null 或 undefined 出现在输出中，你必须先把它转换成字符串 :  {String(myVariable)

const messages = ['React', 'Re: React', 'Re:Re: React']
 
// 3 阻止组件渲染
function WarningBanner(props){
	// 让 render 方法返回 null 即可实现阻止组件渲染。
	if (!props.warn) {
		return null
	}
	return (
		<div>
			Warning！
		</div>
	)
}
class Page extends React.Component {
	constructor(props){
		super(props)
		this.state = {showWarning: true}
		this.handletoggleClick = this.handletoggleClick.bind(this)
	}
	handletoggleClick () {
		this.setState({
			showWarning : !this.state.showWarning
		})
	}
	render(){
		return (
			<div>
				<WarningBanner warn={this.state.showWarning}/>
				<button onClick={this.handletoggleClick}>button</button>
			</div>
		)
	}
}

export default {
	LoginControl: LoginControl,
	messages: messages,
	Mailbox: Mailbox,
	Page: Page
}