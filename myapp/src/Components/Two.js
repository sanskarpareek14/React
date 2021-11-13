import { useSelector } from "react-redux";

const Two = () => {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div>
            <h1>I'm component two</h1>
        </div>
    )
}
export default Two