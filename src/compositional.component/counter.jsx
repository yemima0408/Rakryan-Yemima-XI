import { useState } from 'react'

export default function counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount(count+1)
    const handleDecrement = () => setCount(count-1)

    return (
        <div className="App">
            <button onClick={() => handleIncrement()}Increment></button>
            <button onClick={() => handleDecrement()}Decrement></button>

            <h2>{count}</h2>
        </div>
    )
}