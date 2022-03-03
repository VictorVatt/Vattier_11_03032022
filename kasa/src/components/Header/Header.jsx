import logo from "../../assets/logo_kasa.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <img src={logo} alt="Logo kasa" />
            <nav>
                <Link to='/'>Acceuil</Link>
                <Link to='/about'>A propos</Link>
            </nav>
        </div>
    )
}

export default Header