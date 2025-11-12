import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex center">
            <div className="content">
                <Link to="/" className="nav-element">Home</Link>
            </div>
        </nav>
    );
}