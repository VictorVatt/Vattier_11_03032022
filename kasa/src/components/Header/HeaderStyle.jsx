import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/Styles/colors'

export const Logo = styled.img`
    width: 145px;
    height: 47px;
    @media (min-width: 1024px) {
        width: 210px;
        height: 70px;
    }`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1240px;
    margin:auto;
    padding: 20px;
`
export const StyledLink = styled(Link)`
    color: ${colors.primary};
    margin: 10px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    @media (min-width: 1024px) {
        font-size: 24px;
        margin: 30px;
    }
`
export const StyledLinkSelected = styled(Link)`
    color: ${colors.primary};
    margin: 10px;
    text-decoration: underline;
    font-size: 13px;
    font-weight: 500;
    @media (min-width: 1024px) {
        font-size: 24px;
        margin: 30px;
    }
    `