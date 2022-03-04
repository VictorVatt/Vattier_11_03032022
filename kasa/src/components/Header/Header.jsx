import logo from "../../assets/logo_kasa.png"

import { HeaderWrapper, StyledLink, Logo} from './HeaderStyle'

function Header() {
    return (
        <HeaderWrapper>
            <StyledLink to='/'><Logo src={logo} alt="Logo kasa" /></StyledLink>
            <nav>
                <StyledLink to='/'>Acceuil</StyledLink>
                <StyledLink to='/about'>A propos</StyledLink>
            </nav>
        </HeaderWrapper>
    )
}

export default Header