import colors from '../../utils/Styles/colors'
import styled from 'styled-components'

export const InformationsContainer = styled.div`
    justify-content: space-between;
    padding: 0 20px;
    max-width: 1240px;
    margin:auto;
    color: ${colors.primary};
`

export const TitleLocationTagsContainer = styled.div`

    `

export const InformationTitle = styled.h1`
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    `
export const InformationLocation = styled.p`
    margin: 5px 0 10px 0;
    font-size: 14px;
    font-weight: 500;
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
    `
export const HostRateContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;`
export const HostContainer = styled.div`
    display: flex;
    align-items: center;`

export const HostPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 30px;
`
export const HostName = styled.p`
    font-size: 12px;
    font-weight: 500;
    margin-right: 10px;`

export const RateStarIcon = styled.img`
    margin-right: 5px;`