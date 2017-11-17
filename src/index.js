import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//---------------------  react基础  --------------------
// import jc1 from './react基础/1.jsx.js'; 
// import jc3 from './react基础/3.组件和props.js'; 
// import jc4 from './react基础/4.生命周期和state.js'; 
// import jc5 from './react基础/5.事件处理.js'; 
// import jc6 from './react基础/6.条件渲染.js'; 
// import jc7 from './react基础/7.列表和Keys.js'; 
import jc8 from './react基础/8.表单.js'; 
// import jc9 from './react基础/9.状态提升.js'; 
// import jc10 from './react基础/10.组合 vs 继承.js'; 
// import ReactDemo11 from './react基础/11.reactDemo.js';

//---------------------  react高级  --------------------
import Gj1jsx from './高级/gj-1.jsx.js';
import Gj2PropTypes from './高级/gj-2PropTypes.js';
import Gj3refDom from './高级/3.gj-3.refDom.js';
import Gj4 from './高级/gj-4.非受控组件.js';
import Gj5 from './高级/gj-5.性能优化.js';
import Gj6 from './高级/gj-6context.js';
import registerServiceWorker from './registerServiceWorker';

const user = {
  firstName: 'wu',
  lastName: 'yanping',
  avatarUrl: '/image/star1.png'
}

const name = '123'

ReactDOM.render(
//---------------------  react基础  --------------------
	// jc1.hEle, 					// 1.2
	// jc1.getGreeting(user), 		//1
	// jc3.element, 				//3.2
	// <jc3.Welcome name="yoko"/>, 	//3.2
	// <jc3.App/>,					//3.3
	// <jc3.Comment 
	// 	author={comment.author}
	// 	text={comment.text}
	// 	date={comment.date}/>,	    // 3.4
	// <jc4.App/>,					// 4
	// <jc5.Toggle/>,				//5
	// <jc6.LoginControl/>,         //6.1
	// <jc6.Mailbox unreadMessages={jc6.messages}/>,  // 6.2         //6.2
	// <jc6.Page/>,          //6.3
	// <ul>{jc7.listItem}</ul>,         //7.1
	// <jc7.NumberList numbers={jc7.numbers}/>,          //7.1
	// <jc7.NumberList2 numbers={jc7.numbers}/>,          //7.1
	// <jc7.NumberList3 numbers={jc7.numbers}/>,          //7.1
	// <jc8.NameForm/>,   // 8
	// <jc8.EssayForm/>,
	// <jc8.FlavorForm/>,
	// <jc8.Reservation/>,
	// <jc9.Calculator/>,  //9
	// <jc9.Calculator2/>,
	// <jc10.WelcomDialog/>,   //10.1
	// <jc10.App3/>,             //10.1
	// <jc10.WelcomeDialog2/>,  //10.2
	// <jc10.SignUpDialog/>,      //10.2
//---------------------  react高级  --------------------
	// <ReactDemo11/>,            
	// <Gj1jsx.BlueDatePicker/>,
	// <Gj1jsx.App2/>,
	// <Gj1jsx.ListOfTenThings/>,
	// Gj2PropTypes.Greeting,
	// Gj3refDom.CustomTestInput,
	// Gj3refDom.AutoFocusTextInput,
	// Gj4.NameForm,
	// Gj3refDom.CustomTestInput2,
	// Gj3refDom.Grandparent4,
	// Gj5.CounterButton,
	// Gj5.CounterButton2,
	// Gj5.WordAdder,
	// Gj6.MessageList,
	Gj6.MediaQuery,
	document.getElementById('root')
);

registerServiceWorker();

// setInterval(tick, 1000)										<text class="font_size30">{{item.content}}</text>

