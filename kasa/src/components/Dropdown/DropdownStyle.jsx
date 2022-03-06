import colors from "../../utils/Styles/colors";
import styled from "styled-components";

export const DropdownContainer = styled.div`
    max-width: 582px;
    margin: 1rem auto 0 auto;
    padding:  0 20px 30px 20px;
    overflow: hidden;
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
`

export const DropdownIcon = styled.img`
    `
