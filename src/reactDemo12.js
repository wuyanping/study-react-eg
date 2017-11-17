import React from 'react';
// 第一步：把 UI 划分出组件层级
// FilterableProductTable
// 	SearchBar
// 	ProductTable
// 		ProductCategoryRow
// 		ProductRow

// 第二步：用 React 创建一个静态版本
// 
// 第三步：定义 UI 状态的最小(但完整)表示
// state 有：
// 用户输入的搜索文本
// 复选框的值
// 
// 第四步：确定你的 State 应该位于哪里
function Header() {
  // Import result is the URL of your image
  return <div>header</div>;
}

class ProductCategoryRow extends React.Component {
	render() {
		return (
			<tr><th colSpan="2">{this.props.category}</th></tr>
		)
	}
}

class ProductRow extends React.Component {
	render() {
		var name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>
		return (
			<tr>
				<td colSpan="2">{name}</td>
				<td colSpan="2">{this.props.product.price}</td>
			</tr>
		)
	}
}

class ProductTable extends React.Component {
	render() {
		var filterText = this.props.filterText
		var isOnly = this.props.isOnly
		var rows = []
		var lastCategory = null
		this.props.products.forEach((product) => {
			if (product.name.indexOf(filterText) === -1 || (!product.stocked && isOnly)) {
				// return false 只在当前函数有效，不会影响其他外部函数的执行
				return
			}
			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
			}
			rows.push(<ProductRow product={product} key={product.name}/>)
			lastCategory = product.category
		})
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.bindleFilterTextInputChange = this.bindleFilterTextInputChange.bind(this)
		this.bindleIsOnlyInputChange = this.bindleIsOnlyInputChange.bind(this)
	}
	bindleFilterTextInputChange(e) {
		this.props.onFilterTextInput(e.target.value)
	}
	bindleIsOnlyInputChange(e) {
		this.props.onIsOnlyInput(e.target.checked)
	}
	render() {
		return (
			<form>
				<label>
					<input type="text" name="text" placeholder="search..." value={this.props.filterText} onChange={this.bindleFilterTextInputChange}/>
				</label>
				<p>
					<label>
						<input type="checkbox" name="checkbox" checked={this.props.isOnly} onChange={this.bindleIsOnlyInputChange}/>Only show products in stock
					</label>
				</p>
			</form>
		)
	}
}

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			filterText: '',
			isOnly: false
		}
		this.bindleFilterTextInput = this.bindleFilterTextInput.bind(this)
		this.bindleIsOnlyInput = this.bindleIsOnlyInput.bind(this)
	}
	bindleFilterTextInput(text) {
		this.setState({
			filterText: text
		})
	}
	bindleIsOnlyInput(checked) {
		this.setState({
			isOnly: checked
		})
	}
	render() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					isOnly={this.state.isOnly}
					onFilterTextInput={this.bindleFilterTextInput}
					onIsOnlyInput={this.bindleIsOnlyInput}/>
				<ProductTable 
					products={PRODUCTS}
					filterText={this.state.filterText}
					isOnly={this.state.isOnly}/>
			</div>
		)
	}
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default FilterableProductTable;