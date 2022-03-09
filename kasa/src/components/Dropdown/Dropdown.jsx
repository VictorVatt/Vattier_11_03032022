
import { DropdownTitle, DropdownContainer, DropdownContent, ChevronUpIcon } from './DropdownStyle'
import { useState } from 'react'

import chevronUp from '../../assets/chevron-up-solid.svg'

function Dropdown({ content, title, type, size }) {
    const [isDeployed, setDeployed] = useState(true)

    if (type === 'description') {
        return(
            <DropdownContainer size={size}>
                <DropdownTitle  onClick={() => isDeployed === true ? setDeployed(false) : setDeployed(true)} >
                    {title}
                    <ChevronUpIcon $isDeployed={isDeployed} src={chevronUp} alt='dropdown-icon'/>
                </DropdownTitle>
                <DropdownContent $isDeployed={isDeployed}>
                    <p>{content}</p>
                </DropdownContent>
            </DropdownContainer>
        )
    } else {
        return(
        <DropdownContainer size={size}>
                <DropdownTitle  onClick={() => isDeployed === true ? setDeployed(false) : setDeployed(true)} >
                    {title}
                    <ChevronUpIcon $isDeployed={isDeployed} src={chevronUp} alt='dropdown-icon'/>
                </DropdownTitle>
                <DropdownContent $isDeployed={isDeployed}>
                    {content.map((element) => 
                        (<p>{element}</p>))}
                </DropdownContent>
            </DropdownContainer>
        )
    }
}

export default Dropdown