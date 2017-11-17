import React from 'react'

// Refs & DOM

// 1. 何时使用 Refs
	// 1.1 )处理焦点、文本选择或媒体控制。
	// 1.2 )触发强制动画。
	// 1.3 )集成第三方 DOM 库
// 如果可以通过声明式实现，则尽量避免使用 refs。
// 例如，不要在 Dialog 组件上直接暴露 open() 和 close() 方法，最好传递 isOpen 属性。

// 2. 不要过度使用 Refs
// 你可能首先会想到在你的应用程序中使用 refs 来更新组件。如果是这种情况，请花一点时间，更多的关注在组件层中使用 state
 
// 3. 为 DOM 元素添加 Ref
//   3.1) ref 属性接受一个回调函数，它在组件被加载或卸载时会立即执行。
//   3.2) 当给 HTML 元素添加 ref 属性时，ref 回调接收了底层的 DOM 元素作为参数。例如，下面的代码使用 ref 回调来存储 DOM 节点的引用。
//   3.3) React 组件在加载时将 DOM 元素传入 ref 的回调函数，在卸载时则会传入 null。

class CustomTestInput extends React.Component {
	constructor(props) {
		super(props);
		this.focus = this.focus.bind(this)
	}
	focus() {
		// 直接使用原生 API 使 text 输入框获得焦点
    	this.textInput.focus();
    	console.log(this.textInput)
	}
	render() {
		return (
			<div style={{background: 'red', width: '80%'}}>
				<input
					type="text"
					ref={input => this.textInput = input}/>
				<input
					type="button"
					value="Focus the text input"
					onClick={this.focus}/>
			</div>
		)
	}
}

// 4 为类组件添加 Ref
class AutoFocusTextInput extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.textInput.focus()
		console.log(this.textInput)
	}
	// 注意，这种方法仅对 class 声明的 CustomTextInput 有效
	// 当 ref 属性用于使用 class 声明的自定义组件时，ref 的回调接收的是已经加载的 React 实例
	render() {
		return (
			<CustomTestInput ref={input => this.textInput = input}/>
		)
	}
}

// 5. Refs 与函数式组件
	// 5.1) 你不能在函数式组件上使用 ref 属性，因为它们没有实例：
	// 5.2) 如果你想使用 ref，就像你想使用生命周期方法或者 state 一样，应该将其转换为 class 组件。
	// 5.3) 你可以在函数式组件内部使用 ref，只要它指向一个 DOM 元素或者 class 组件：
	// 
function CustomTestInput2() {
	// 这里必须声明 textInput，这样 ref 回调才可以引用它
  	let textInput = null;

	function focus() {
		// 直接使用原生 API 使 text 输入框获得焦点
    	textInput.focus();
    	console.log(textInput)
	}
	return (
		<div style={{background: 'red', width: '80%'}}>
			<input
				type="text"
				ref={input => textInput = input}/>
			<input
				type="button"
				value="Focus the text input"
				onClick={focus}/>
		</div>
	)
}

// 6. 对父组件暴露 DOM 节点
// 适用于类组件和函数式组件。
function CustomTestInput3(props) {
	return (
		<div>
			<input ref={props.inputRef}/>
		</div>
	)
}

class Parent3 extends React.Component {
	render() {
		return (
			<CustomTestInput3
				inputRef = {el => this.inputElement = el }/>
		)
	}
}
// 在这个例子中，Parent 将它的 ref 回调作为一个特殊的 inputRef 传递给 CustomTextInput，然后 CustomTextInput 通过 ref 属性将其传递给 <input>。最终，Parent 中的 this.inputElement 将被设置为与 CustomTextInput 中的 <input> 元素相对应的 DOM 节点。


function CustomTextInput4(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

function Parent4(props) {
  return (
    <div>
      My input: <CustomTextInput4 inputRef={props.inputRef} />
    </div>
  );
}


class Grandparent4 extends React.Component {
	componentDidMount() {
		this.inputElement.focus()
		console.log(this.inputElement)
	}
  render() {
    return (
      <Parent4
        inputRef={el => this.inputElement = el}
      />
    );
  }
}
// 上面的例子中，Grandparent 首先指定了 ref 回调函数。它通过一个常规的 inputRef 属性被传递到 Parent，Parent 也同样把它传递给了 CustomTextInput。最后 CustomTextInput 读取了 inputRef 属性并将传递的函数作为 ref 属性附加到 <input>。最终，Grandparent 中的 this.inputElement 被设置为 CustomTextInput 的 input 对应的 DOM 节点。

export default {
	CustomTestInput: <CustomTestInput/>,
	AutoFocusTextInput: <AutoFocusTextInput/>,
	CustomTestInput2: <CustomTestInput2/>,
	Grandparent4: <Grandparent4/>
}