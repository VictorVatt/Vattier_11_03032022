import colors from "../../utils/Styles/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const CardContainer = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    margin: 20px;
    align-items:center;`
export const CardCover = styled.img`
    width: 100%;
    max-width: 335px;
    object-fit: cover;
    height: 255px;
    border-radius: 10px;
`
export const CardTitle = styled.p`
    position: absolute;
    top: 178px; 
    left: 16px;
    width: 200px;
    margin:0;
    color: ${colors.primary};
    font-size: 18px;
    font-weight: 500;
    
`
export const LinkWithoutUnline = styled(Link)`
text-decoration: none;`