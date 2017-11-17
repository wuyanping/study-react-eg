import React from 'react'
const PropTypes = require('prop-types');

// 1.
// class Button extends React.Component {
//   // <button style={{background: this.props.color}}>
//   render() {
//     return (
//       <button style={{background: this.context.color}}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

// Button.contextTypes = {
//   color: PropTypes.string
// };

const Button = ({children}, context) =>
  <button style={{background: context.color}}>
    {children}
  </button>;

Button.contextTypes = {color: PropTypes.string};

class Message extends React.Component {
  // {this.props.text} <Button color={this.props.color}>Delete</Button>
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    )
  }
}

class MessageList extends React.Component {
  getChildContext() {
    return {color: "red"};
  }
  render() {
    // const color = "purple";
    // const children = this.props.messages.map((message) =>
    //   <Message text={message.text} color={color} />
    // );
    const children = this.props.messages.map((message) =>
      <Message text={message.text}/>
    );
    return <div >{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string
};

const messages = [{text: 'yoko'}, {text: 'wyp'}]


// 2.

class MediaQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {type:'desktop'};
  }

  getChildContext() {
    return {type: this.state.type};
  }

  componentDidMount() {
    const checkMediaQuery = () => {
      const type = window.matchMedia("(min-width: 1025px)").matches ? 'desktop' : 'mobile';
      if (type !== this.state.type) {
        this.setState({type});
      }
      console.log(this.state.type)
    };

    window.addEventListener('resize', checkMediaQuery);
    checkMediaQuery();
  }

  render() {
    return this.props.children;
  }
}

MediaQuery.childContextTypes = {
  type: PropTypes.string
};

export  default {
  MessageList: <MessageList messages={messages}/>,
	MediaQuery: <MediaQuery>11</MediaQuery>
}