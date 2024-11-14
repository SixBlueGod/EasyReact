// 项目的根组件
// App -> index.js -> public/index.html
const count = 100
function getName(){
  return 'JACK'
}

const list = [
  { id: 1001, name: 'Vue'},
  { id: 1002, name: 'React'},
  { id: 1003, name: 'Angular'}
]

// 定义组件1
function ButtonA() {
  return <button>function ButtonA</button>
}

// 定义组件2
const ButtonB = () => {
  return <button>const ButtonB</button>
}

const isLogin = false

// const clickHandler2 = (e) => {
//   console.log('button 按钮点击了',e)
// }

function App() {

  const checkonce = (e, name) => {
    console.log('button 按钮点击了', name)
  }

  return (
    <div className="App">
      <ButtonA></ButtonA>
      <ButtonB></ButtonB>
      {/* <button onClick={clickHandler2}>click me</button>    */}
      <button onClick={(e) => checkonce(e, 'Jack')}>click me 2</button>   
      This is the react app.
      {' test 1'}
      {count}
      {getName()}
      {new Date().getDate()}
      {/* 外层{}是识别表达式语法，内层{}是识别对象结构 */}
      <div style={{color: 'red'}}>this is the div</div>
      <div>
        <ul>
          {list.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>

      {/* 条件渲染 */}
      {isLogin && <span style={{color: 'red'}}>this is a span </span>}
      {isLogin ? <span>loading...</span> : <span>please login...</span>}

    <div>
    </div>
    </div>
  );
}

export default App;
