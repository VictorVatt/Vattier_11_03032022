import { CardCover, CardTitle, CardContainer, LinkWithoutUnline } from "./CardStyle"

function Card( { title, picture, id }) {
    return(
            <CardContainer>
                <LinkWithoutUnline to={`/housing/${id}`}>
                <CardCover src={picture} alt='house-card' />
                <CardTitle>{title}</CardTitle>
                </LinkWithoutUnline>
            </CardContainer>
    )
}

export default Card