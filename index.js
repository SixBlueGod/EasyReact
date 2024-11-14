// 整个项目的入口 从这里开始运行

// 导入react必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

// 导入项目的跟组件
import App from './App';
import App1 from './Demo1';
import App2 from './Demo2';
import App5 from './SonAndDad';
import CommonApp from './common'

// 把app根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App5 />);
