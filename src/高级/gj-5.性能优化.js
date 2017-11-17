import React from 'react'
const Immutable = require('immutable')
// 1.
class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.color + ',' + nextProps.color)
    console.log(this.state.count + ',' + nextState.count)
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) { //1 !== 2
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

// 2.可以使用React.PureComponent而不必写你自己的shouldComponentUpdate，它只做一个浅比较。但是由于浅比较会忽略属性或状态突变的情况，此时你不能使用它。
class CounterButton2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}


// 3.问题是PureComponent将会在this.props.words的新旧值之间做一个简单的比较
class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateColorMap = this.updateColorMap.bind(this);
  }

  handleClick() {
    // 这部分是坏的风格,导致一个错误,this.props.words的新旧值还是相等的
    // 但是由于浅比较会忽略属性或状态突变的情况，此时你不能使用它。
    // const words = this.state.words;
    // words.push('marklar');
    // this.setState({words: words});
    
    // 正确写法 避免此类问题最简单的方式是避免使用值可能会突变的属性或状态。
    this.setState(prevState => ({
      // words: prevState.words.concat(['marklar'])
      words: [...prevState.words, 'marklar']
    }));
    console.log(this.state.words)

    // 5. 使用不可突变的数据结构
    //Immutable.js是解决这个问题的另一种方法。它通过结构共享提供不可突变的，持久的集合：
    // 5.1)不可突变:一旦创建，集合就不能在另一个时间点改变。
    // 5.2)持久性:可以使用原始集合和一个突变来创建新的集合。原始集合在新集合创建后仍然可用。
    // 5.3)结构共享:新集合尽可能多的使用原始集合的结构来创建，以便将复制操作降至最少从而提升性能。
      // const x = {foo:'bar'}
      // const y = x;
      // y.foo = 'baz'
      // console.log(x === y)  // true

      // 使用immutable.js实现类似效果：
      const SomeRecord = Immutable.Record({foo: null})
      const x = new SomeRecord({foo: 'bar'})
      const y = x.set('foo', 'baz') ///，x突变后返回了一个新的索引，因此我们可以安全的确认x被改变了。
      // const y = x
      console.log(x === y)  // false
      console.log(x)
      console.log(y)  

  }

  // 4 想要实现代码而不污染原始对象
  updateColorMap(colormap) {
    // return Object.assign({}, colormap, {right: 'blue'});
    return {...colormap, right: 'blue'};
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>anniu</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export default {
  CounterButton: <CounterButton color="red"/>,
  CounterButton2: <CounterButton2 color="blue"/>,
  WordAdder: <WordAdder/>
}