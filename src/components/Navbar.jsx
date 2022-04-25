import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <ul className="navbar">
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact</Link>
        </ul>
    )
}