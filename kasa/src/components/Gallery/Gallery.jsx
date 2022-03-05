import { HomePicture, GalleryContainer, ChevronLeftStyle, ChevronRightStyle, GalleryComponentWrapper,ImageCounter } from "./GalleryStyle"
import chevronLeft from '../../assets/chevron-left-solid.svg'
import chevronRight from '../../assets/chevron-right-solid.svg'
import { useState } from 'react'


function Gallery({ pictures }) {
    const [index, setIndex] = useState(0)
    if (index > pictures.length - 1) {
        setIndex(0)}
    if (index < 0) {
        setIndex(pictures.length - 1)
    }
    return (
    <GalleryComponentWrapper>
        <GalleryContainer >
                <HomePicture src={pictures[index]} alt="lodging-tour" />
                <ChevronLeftStyle src={chevronLeft} alt="précedent" onClick={() => setIndex(index - 1)}/>
                <ChevronRightStyle src={chevronRight} alt="suivant" onClick={() => setIndex(index + 1)}/>
        </GalleryContainer>
        <ImageCounter>{index + 1}/{pictures.length}</ImageCounter>
    </GalleryComponentWrapper>
    )
}
export default Gallery
