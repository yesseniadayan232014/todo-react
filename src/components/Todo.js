const Todo = (props) => {
    return (

        
        <div>
            <input type="checkbox" />
            <label>{props.children}</label>
            <button onClick={props.click}  >
            🗑️
            </button>
                
            
        </div>
    )
}

export default Todo