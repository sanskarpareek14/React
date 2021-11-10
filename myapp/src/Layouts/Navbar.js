/* eslint-disable jsx-a11y/anchor-is-valid */

const Navbar = ({ setCurrentComp }) => {

    return (
        <nav>
            <a onClick={() => { setCurrentComp('Calculator') }} href="#">Calculator</a>
            <a onClick={() => { setCurrentComp('Timer') }} href="#">Timer</a>
            <a onClick={() => { setCurrentComp('Tap') }} href="#">Tap</a>
        </nav>
    );
}

export default Navbar;