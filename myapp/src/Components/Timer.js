import { useEffect } from "react";
import Tap from './Tap'
const Timer = () => {
    return (
        <div className="container">
            <div className="timer">
                <h2>Timer</h2>
                <Tap />
            </div>
        </div>
    );
}

export default Timer;