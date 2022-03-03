import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/Styles/colors'

export const Logo = styled.img`
    width: 145px;
    height: 47px;`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
export const StyledLink = styled(Link)`
    color: ${colors.primary};
    text-decoration: none;
    margin: 10px;
    font-size: 13px;
    font-weight: 500;

`