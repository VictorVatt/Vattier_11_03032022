
import { DropdownTitle, DropdownContainer, DropdownContent, ChevronUpIcon } from './DropdownStyle'
import { useState } from 'react'

import chevronUp from '../../assets/chevron-up-solid.svg'

function Dropdown({ description }) {
    const [isDeployed, setDeployed] = useState(true)
    return(
        <DropdownContainer>
            <DropdownTitle  onClick={() => isDeployed === true ? setDeployed(false) : setDeployed(true)} >
                Description
                <ChevronUpIcon $isDeployed={isDeployed} src={chevronUp} alt='dropdown-icon'/>
            </DropdownTitle>
            <DropdownContent $isDeployed={isDeployed}>
                <p>{description}</p>
            </DropdownContent>
        </DropdownContainer>
    )
}

export default Dropdown