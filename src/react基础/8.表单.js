import React from 'react'
// 表单
// 1. 受控组件
class NameForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {value: ''}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(e){
		this.setState({
			value: e.target.value.toUpperCase()
		})
	}
	handleSubmit(e){
		alert('a name was submitted: ' + this.state.value)
		e.preventDefault()
	}
	render(){
		return (
			<form>
				<label>
					Name: 
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
				</label>
				<input type="submit" value="Submit" onClick={this.handleSubmit}/>
			</form>
		)
	}
}

// 2. textarea标签
class EssayForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			value: 'Please write an essay about your favorite DOM element !'
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(e){
		this.setState({
			value: e.target.value
		})
	}
	handleSubmit(e){
		alert('An essay was submitted: ' + this.state.value)
		e.preventDefault()
	}
	render(){
		return (
			<form>
				<label>
					Name: 
					<textarea value={this.state.value} onChange={this.handleChange}/>
				</label>
				<input type="submit" value="Submit" onClick={this.handleSubmit}/>
			</form>
		)
	}
}

// 3. select标签
class FlavorForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: 'wuyanping'
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange (e) {
		this.setState({
			value: e.target.value
		})
	}
	handleSubmit (e) {
		alert('your favorite flavor is: ' + this.state.value) 
		e.preventDefault()
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Plck your favorite La Croix flavor:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="yoko">Yoko</option>
						<option value="wuyanping">Wuyanping</option>
						<option value="Hb">hb</option>
					</select>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}

// 4. 多个输入的解决方法
class Reservation extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isGoing: true,
			number: 2
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleInputChange (e) {
		const target = e.target
		const value = target.type == "checkbox" ? target.checked : Number(target.value)
		const name = target.name
		this.setState({
			// ES6当中的计算属性名语法
			[name]: value
		})
	}
	handleSubmit (e) {
		console.log(this.state)
		e.preventDefault()
	}
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/>
				</label>
				<label>
					<input name="number" type="number" value={this.state.number} onChange={this.handleInputChange}/>
				</label>
				<input type="submit" value="submit"/>
			</form>
		)
	}
}
export default {
	NameForm: NameForm,
	EssayForm: EssayForm,
	FlavorForm: FlavorForm,
	Reservation: Reservation
}