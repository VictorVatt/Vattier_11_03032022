import colors from '../../utils/Styles/colors'
import styled from 'styled-components'

export const InformationsContainer = styled.div`
    justify-content: space-between;
    padding: 0 20px;
    max-width: 1240px;
    margin:auto;
    color: ${colors.primary};
    @media (min-width: 1024px) {
        display: flex;
        margin-top: 30px;
    }
`

export const TitleLocationTagsContainer = styled.div`

    `

export const InformationTitle = styled.h1`
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    @media (min-width: 1024px) {
        font-size: 36px;
    }
    `
export const InformationLocation = styled.p`
    margin: 5px 0 10px 0;
    font-size: 14px;
    font-weight: 500;
    @media (min-width: 1024px) {
        font-size: 18px;
    }
    `
export const TagContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
`
export const InformationTag = styled.span`
    background-color: ${colors.primary};
    color: white;
    font-size: 10px;
    padding: 0 20px;
    border-radius:5px;
    margin: 0 10px 10px 0;
    @media (min-width: 1024px) {
        padding: 4px 22px;
        font-size: 14px;
        border-radius: 10px;
    }
    `
export const HostRateContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1024px) {
        display: block;
    }`
export const HostContainer = styled.div`
    display: flex;
    align-items: center;
    @media (min-width: 1024px) {
        justify-content: flex-end;
    }`

export const HostPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 30px;
    @media (min-width: 1024px) {
        width: 64px;
        height: 64px;
        border-radius: 50px;
    }
`
export const HostName = styled.p`
    font-size: 12px;
    font-weight: 500;
    margin-right: 10px;
    @media (min-width: 1024px) {
        text-align: right;
        font-size: 18px;
    }`

export const RateContainer = styled.div`
@media (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
}


`

export const RateStarIcon = styled.img`
    margin-right: 5px;
    width: 15px;
    height: 15px;
    @media (min-width: 1024px) {
        margin-right: 0;
        margin-left: 10px;
        width: 30px;
        height: 30px;
    }
    `
export const RateStarIconGrey = styled.img`
    margin-right: 5px;
    width: 15px;
    height: 15px;
    @media (min-width: 1024px) {
        margin-right: 0;
        margin-left: 10px;
        width: 30px;
        height: 30px;
    }
    `