import { useEffect } from 'react'

const Tap = () => {
    useEffect(() => {
        const alert = () => window.alert('Hey!! You just double clicked')
        document.addEventListener('dblclick', alert)
    }, [])
    return (
        <div className="container">
            <div className="tap">
                <h2>Tap</h2>
            </div>
        </div>
    );
}

export default Tap;