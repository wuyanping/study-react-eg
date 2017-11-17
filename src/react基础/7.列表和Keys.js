import React from "react"

// 列表 & Keys
// 1 渲染多样的组件
const number = [1,2,3,4,5]
const listItem = number.map((item) => {
	return <li>{item}</li>
})
function NumberList (props) {
	const numbers  = props.numbers
	const listItems = numbers.map((item) => {
		// 2 数组中的每一个元素赋予一个确定的标识
		return <li key={item.toString()}>{item}</li>
	})
	return (
		<ul>{listItems}</ul>
	)
}

// 3 用keys提取组件
// JSX允许在大括号中嵌入任何表达式
function LiItem(props){
	return <li>{props.value}</li>
}
function NumberList2(props) {
	const numbers = props.numbers
	const listItems = numbers.map((item) => {
		return <LiItem key={item.toString} value={item}/>
	})
	return (
		<ul>{listItems}</ul>
	)
} 
function NumberList3(props) {
	const numbers = props.numbers
	return (
		<ul>
			{numbers.map((item) => {
				return <LiItem key={item.toString} value={item}/>
			})}
		</ul>
	)
} 

export default {
	listItem: listItem,
	NumberList: NumberList,
	numbers: number,
	NumberList2: NumberList2,
	NumberList3: NumberList3
}