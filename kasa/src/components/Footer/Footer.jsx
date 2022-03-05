import logo from '../../assets/footer_logo.png'
import { FooterContainer, FooterWrapper, LogoImg, FooterText } from './FooterStyle'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <LogoImg src={logo} alt='kasa logo'/>
                <FooterText>© 2020 Kasa. All rights reserved</FooterText>
            </FooterWrapper>
        </FooterContainer>

    )
}

export default Footer