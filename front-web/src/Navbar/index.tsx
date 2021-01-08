import './style.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="main-navbar">
            <Link to="/">DS Deliver</Link>
        </nav>
    )
}

export default Navbar;