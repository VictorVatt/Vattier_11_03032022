import { Error404, StyledLink, Content, LinkContainer } from "./ErrorStyle"

function Error() {
    return(
        <div>
            <div>
                <Error404>404</Error404>
                <Content>Oups ! La page que vous demandez n'existe pas</Content>
            </div>
            <LinkContainer>
                <StyledLink to={"/"}>Retourner sur la page d’accueil</StyledLink>
            </LinkContainer>
        </div>
    )
}
export default Error