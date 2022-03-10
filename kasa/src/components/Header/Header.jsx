import logo from "../../assets/logo-kasa.svg"
import { useParams, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { HeaderWrapper, StyledLink, StyledLinkSelected, Logo} from './HeaderStyle'

function Header() {
    const path = useLocation().pathname

    return (
        <HeaderWrapper>
            <StyledLink to='/'><Logo src={logo} alt="Logo kasa" /></StyledLink>
            <nav>
                { path === '/' ? (
                    <div>
                        <StyledLinkSelected to='/' >Accueil</StyledLinkSelected>
                        <StyledLink to='/about'>A propos</StyledLink>
                    </div>) : (
                    <div>
                        <StyledLink to='/' >Accueil</StyledLink>
                        <StyledLinkSelected to='/about'>A propos</StyledLinkSelected>
                    </div>
                    )
                }
            </nav>
        </HeaderWrapper>
    )
}

export default Header