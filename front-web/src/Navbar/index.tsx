import './style.css'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './logo.svg'

function Navbar() {
    return (
        <nav className="main-navbar">
            <Link to="/"><Logo /></Link>
            <Link to="/">DS Deliver</Link>
        </nav>
    )
}

export default Navbar;