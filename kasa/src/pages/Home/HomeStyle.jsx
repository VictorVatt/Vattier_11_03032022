import styled from "styled-components";
import colors from "../../utils/Styles/colors";
import background from '../../assets/Background.png'

export const BodyHeadContainer = styled.div`
    padding:  0 20px;
    max-width: 1280px;
    margin: 10px auto 0 auto;
`
export const BodyHead = styled.div`
    background-image : url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    width: 100%;
    height: 111px;
    @media (min-width: 1024px) {
        height: 223px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `
export const HeadContent = styled.p`
    position: relative;
    top: 31px;
    padding: 0 16px;
    margin:0;
    color: ${colors.primary};
    font-size: 24px;
    line-heigth: 24px;
    font-weight: 500;
    @media (min-width: 1024px) {
        top: 0;
        padding: 0;
        font-size: 48px;
        color: white;
    }`

export const CardPartWrapper = styled.div`
    margin-top: 22px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${colors.backgroundLight};
    max-width: 1280px;
    padding-top: 20px;
    border-radius: 10px;

`

export const HomeWrapper = styled.div`
`
export const MainContentContainer = styled.div`
    display:flex;
    justify-content:center;

`
