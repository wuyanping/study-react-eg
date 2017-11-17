import React from "react"

// 状态提升
function BoilingVerdict (props) {
	if (props.celsius >= 100) {
		return <p>水会烧开</p>
	}
	return <p>水不会烧开</p>
}

//1 添加第二个输入框
class Calculator extends React.Component {
	constructor (props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {temperature: ''}
	}

	handleChange (e) {
		this.setState({
			temperature: e.target.value
		})
	}

	render () {
		const temperature = this.state.temperature
		return (
			<fieldset>
				<legend>输入一个摄氏度</legend>
				<input type="type" value={temperature} onChange={this.handleChange}></input>
				<BoilingVerdict celsius={this.state.temperature}/>
			</fieldset>
		)
	}
}

const scaleName = {
	c: '摄氏度',
	f: '华氏温度'
}
class TemperatureInput extends React.Component {
	constructor (props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		// this.state = {temperature: ''}
	}

	handleChange (e) {
		this.props.onTempertrueChange(e.target.value)
	}

	render () {
		// const temperature = this.state.temperature
		const temperature = this.props.temperature
		const scale = this.props.scale
		return (
			<fieldset>
				<legend>输入一个{scaleName[scale]}</legend>
				<input type="type" value={temperature} onChange={this.handleChange}></input>
			</fieldset>
		)
	}
}
class Calculator2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scale: 'c',
			temperature: ''
		}
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
		this.handleFahrenhetChange = this.handleFahrenhetChange.bind(this)
	}
	handleCelsiusChange(temperature) {
		this.setState({
			temperature: temperature,
			scale: 'c'
		})
	}
	handleFahrenhetChange(temperature) {
		this.setState({
			temperature: temperature,
			scale: 'f'
		})
	}
	render () {
		const temperature = this.state.temperature
		const celsius = this.state.scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = this.state.scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
		return (
			<div>
				<TemperatureInput 
					scale="c"
					temperature={celsius}
					onTempertrueChange={this.handleCelsiusChange}/>
				<TemperatureInput 
					scale="f"
					temperature={fahrenheit}
					onTempertrueChange={this.handleFahrenhetChange}/>
				<BoilingVerdict celsius={parseFloat(celsius)}/>
			</div>
		)
	}
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default {
	Calculator: Calculator,
	Calculator2: Calculator2
}