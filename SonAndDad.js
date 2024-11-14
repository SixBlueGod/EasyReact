function Son (props) {
    console.log(props);
    return <div> this is son. {props.name} {props.table} {props.children}</div>
}

function App5() {
    const name = 'this is farther name'
    const age = 'this is farther age'
    return (
        <div>
            <Son 
                name={name}
                age={age}
                table={<div> this is div</div>}
            />
            <Son>
                <span>this is span</span>
            </Son>
        </div>
    )
}

export default App5; 