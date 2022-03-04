import { HomePicture } from "./GalleryStyle"

function Gallery({ pictures }) {
    return (
        <div>
            {pictures.map((element, index) => (
                <HomePicture key={index} src={element} alt="prout" />
            ))}
            <p>{pictures.length}</p>
        </div>
    )
}
export default Gallery
