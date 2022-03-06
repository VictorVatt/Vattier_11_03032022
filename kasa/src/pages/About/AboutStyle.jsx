import styled from "styled-components";
import background from '../../assets/about-background.png'

export const BackgroundHeadContainer = styled.div`
    padding:  0 20px;
    max-width: 1240px;
    margin: 10px auto 2rem auto;

`
export const BackgroundContainer = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    margin : auto;
    background-size: cover;
    height: 223px;
    width: 100%;
    border-radius: 10px;
`
export const DropDownPartContainer = styled.div`
    margin-bottom: 2rem;`