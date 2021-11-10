import { useEffect, useState } from 'react'
import Calculator from './Calculator'

const Tap = () => {
    useEffect(() => {
        const alert = () => window.alert('Hey!! You just double clicked')
        document.addEventListener('dblclick', alert)
        return () => document.removeEventListener('dblclick', alert)
    }, [])
    const [count, setCount] = useState(0)
    return (
        <div className="container">
            <div className="tap">
                <h2>{count}</h2>
                <button onClick={() => setCount(prev => prev + 1)}>Click</button>
            </div>
            <Calculator />
        </div>
    );
}

export default Tap;