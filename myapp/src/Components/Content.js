import ListItem from './ListItem'
import { useState } from 'react'
const Content = () => {
    // let counter = 0
    let [counter, setCounter] = useState(0)
    // console.log(counter)
    // console.log(mysteryfunction)
    console.log('rerender')
    return (
        <div className="container">
            <h2>{counter}</h2>
            <button onClick={() => {
                console.log(counter)
                counter = counter + 1
                setCounter(previousValue => {
                    console.log(previousValue)
                    return counter
                })
            }}>Click Me</button>
        </div>
    );
}

export default Content;

// import React from "react";

// class Content extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         };
//     }
//     render() {
//         return (
//             <div className="container">
//                 Lorem ipsum dolor sit amet consecture adispsj elit.COnseehguer aliquid debits expeditia.
//             </div>
//         )
//     }
// }
// export default Content;