import colors from "../../utils/Styles/colors";
import styled from "styled-components";

export const DropdownContainer = styled.div`
    max-width: 1023px;
    margin: 1rem auto 0 auto;
    padding:  0 20px 30px 20px;
    overflow: hidden;
    @media (min-width: 1024px) {
        ${(props) => props.size === "small" && `width: 582px; margin: 0; `}
        padding : 0 10px 53px 10px;
    `
export const DropdownTitle = styled.div`
    background-color: ${colors.primary};
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    border-radius: 5px;
    color: white;
    position: relative;
    z-index: 100;
    transition-duration: 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #E35757;
    }
    @media (min-width: 1024px) {
        height: 52px; 
        border-radius: 10px;
    }`
export const ChevronUpIcon = styled.img`
    transition-duration: 0.7s;
    transition:delay: 0.3s;
    ${(props) => props.$isDeployed === true && `transform: rotate(180deg)`}
`
    export const DropdownContent = styled.div`
    background-color: ${colors.backgroundLight};
    border-radius: 5px;
    z-index: 1;
    padding: 20px 0;
    color: ${colors.primary};
    transition-duration: 1s;
    ${(props) => props.$isDeployed === true ? 
        `margin-top:-17rem;`
    : 
        `margin-top:0;`}
    p{
        margin: 0 20px;
    }
    @media (min-width: 1024px) {
        font-size: 18px; 
        border-radius: 10px;
    }
`

export const DropdownIcon = styled.img`
    `
