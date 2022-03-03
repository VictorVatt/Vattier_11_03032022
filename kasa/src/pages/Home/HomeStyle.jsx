import styled from "styled-components";
import colors from "../../utils/Styles/colors";
import background from '../../assets/Background.png'

export const BodyHead = styled.div`
    background-image : url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height:111px;
    overflow:hidden;
    width:100%;
    border-radius: 10px;
    margin: 10px 20px;
    color: ${colors.primary};
    `
export const HomeWrapper = styled.div`
    display flex;
    width:100%;`

export const HeadContent = styled.p`
    color: ${colors.primary};
    font-size:24px;
    margin: 0;
    min-width: 230px;
    max-width: 700px;
    position: relative;
    top: 30px;
    left:16px;`