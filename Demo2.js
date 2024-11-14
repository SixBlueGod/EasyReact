import { useState } from 'react'
import './index.css'


const style1 = {
    color: 'blue',
    fontSize: '50px'
}


function App2 (){

    const [form, setForm] = useState({
        name: 'Jack'
    })

    const handleChangeName = () => {
        // form.name = 'Johnny'
        // setForm返回了一个全新的对象
        setForm({
            // ...是展开运算符, 用来把form中原来的内容在这里展开. 然后下面重新设置了name的值
            ...form,
            name: 'john'
        })
    }

    
    const handleChangeName2 = () => {
        // form.name = 'Johnny'
        setForm({
            ...form,
            name: 'Johnny'
        })
        console.log('form :>> ', form.name);
    }
    
    return (
        <div className='App'>
            <button onClick={handleChangeName}>{form.name}</button>
            <button onClick={handleChangeName2}>{form.name}</button>
            {/* 外层大括号是为了识别对象， 里层大括号的key是样式的属性，value是属性的值*/}
            <div style={{color: 'red'}}>this is div</div>
            <span style={{color: 'orange', fontSize: '50px'}}>this is span</span>
            <span style={style1}>this is span</span>
            <div className='foo'>this is div from index.css</div>
        </div>
    )
}


export default App2;