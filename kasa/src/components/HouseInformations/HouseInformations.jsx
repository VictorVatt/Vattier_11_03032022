import { RateStarIcon, RateStarIconGrey, InformationsContainer, InformationTitle, InformationLocation, InformationTag, TagContainer, HostRateContainer, HostContainer, HostPicture, HostName, RateContainer } from './HouseInformationsStyle' 
import rateLogo from '../../assets/rateLogo.svg'
import rateLogoGrey from '../../assets/rateLogoGrey.svg'

function RedStarRender(rate) {
    let array = []
    const numberOfStars = parseInt(rate)
    for (let i = 1; i <= numberOfStars; i++) {
        array.push(`${i}`)
    }
    return array
}

function GreyStarRender(rate) {
    let array = []
    const rateMax = 5
    const numberOfStars = parseInt(rate)
    const numberOfGreyStar = rateMax - numberOfStars
    for(let i = 1; i <= numberOfGreyStar; i++) {
        array.push(`${i}`)
    }
    return array
}
function HouseInformations({ title, host, location, tags, rating }) {
    return(
        <InformationsContainer>
            <div>
                <InformationTitle>{title}</InformationTitle>
                <InformationLocation>{location}</InformationLocation>
                <TagContainer>
                    {tags.map((element, index) => (
                        <InformationTag key={`{${element}-${index}}`}>{element}</InformationTag>
                ))}
                </TagContainer>
            </div>
            <HostRateContainer> 
                <HostContainer>
                    <HostName>{host.name}</HostName>
                    <HostPicture src={host.picture} alt={`${host.name} profile`} />
                </HostContainer>
                <RateContainer>
                    {RedStarRender(rating).map((element, index) => (
                        <RateStarIcon key={index} src={rateLogo} alt='rate-icon'/>
                    ))}
                    {GreyStarRender(rating).map((element, index) => (
                        <RateStarIconGrey key={index} src={rateLogoGrey} alt='rate-icon'/>
                    ))}
                </RateContainer>
            </HostRateContainer>
        </InformationsContainer>
    )
}

export default HouseInformations