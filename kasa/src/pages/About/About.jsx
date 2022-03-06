import { BackgroundContainer, BackgroundHeadContainer, DropDownPartContainer } from './AboutStyle'
import Dropdown from '../../components/Dropdown/Dropdown'

const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
function About() {
    return(
        <div>
            <BackgroundHeadContainer>
                <BackgroundContainer></BackgroundContainer>
            </BackgroundHeadContainer>
            <DropDownPartContainer>
                <Dropdown content={"Nous sommes fiables"} title={"Fiabilité"} type={"description"}/>
                <Dropdown content={respectContent} title={"Respect"} type={"description"}/>
                <Dropdown content={"Nous rendons service"} title={"Service"} type={"description"}/>
                <Dropdown content={"Nous sommes responsables"} title={"Responsabilité"} type={"description"}/>
            </DropDownPartContainer>
        </div>

    )
}

export default About