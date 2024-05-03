import { useState } from "react"
import { Button, Input }from "antd" 


const AddItem = (props) => {
    // const { addTodos }  = props
    const [ text, setText ] = useState('')
    const handleInput = (inputValue) => {
        setText(inputValue)
    }

    const addTask = () => {
        // eslint-disable-next-line react/prop-types
        props.addTodos(text)
        // console.log(text)
        setText('')
    }
    return (
        // add my item 
        <div>
            <Input value={text} type="text" onChange={(e)=> handleInput(e.target.value)}/>
            <Button type="primary" onClick={addTask}>Add Task</Button>
        </div>
    )
}

export default AddItem