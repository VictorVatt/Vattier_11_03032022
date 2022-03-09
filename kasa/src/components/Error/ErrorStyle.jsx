import colors from "../../utils/Styles/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Error404 = styled.h1`
    color: ${colors.primary};
    font-weight: bold;
    font-size: 96px;
    margin: 2rem 0 0 0;
    line-height: 142.6%;
    text-align: center;`

export const Content = styled.p`
    text-align:center;
    color: ${colors.primary};
    margin-bottom: 12rem;
    padding: 0 45px;
    `
export const LinkContainer = styled.div`
    display:flex;
    justify-content: center;
    margin:  0 auto 10.9rem 0;
`
export const StyledLink = styled(Link)`
    color: ${colors.primary};`