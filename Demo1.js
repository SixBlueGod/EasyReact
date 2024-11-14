// 使用useStates实现一个计数器按钮

import { useState } from 'react'


function App1() {
    // 1.调用useState添加一个状态变量
    // count 状态变量
    // setCount 修改状态变量的方法
    let [count, setCount] = useState(0)

    // 点击事件回调
    const handleClick = () => {
        // 作用：1.用传入的新值设置为新的count
        // 2.重新使用新的count渲染UI
        // setCount(count => count + 1)
        setCount(count + 1)
        // count = count+1
        // console.log(count);
    }
    return (
        <div className="App">
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}

export default App1;