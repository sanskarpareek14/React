import { useState } from 'react'
const Content = () => {
    const [items, setItems] = useState([])
    const [value, setValue] = useState('')

    const handleSubmit = () => {
        setItems(prev => [...prev,])
    }
    const handleInput = (e) => {
        setValue(e.target.value)
    }
    console.log(value)
    return (
        <>
            <h2>Todo</h2>
            <form>
                <input onChange={handleInput} type="text" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {items.map(item => <li>item</li>)}
            </ul>
        </>
    )
}
export default Content