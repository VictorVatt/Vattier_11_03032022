
import styled from "styled-components";

export const GalleryComponentWrapper  = styled.div`
padding: 0 20px;
`
export const GalleryContainer = styled.div`
    position:relative;
    display:flex;
    min-width: 280px;
    border-radius: 10px;
    max-width: 1240px;
    margin: auto;
    heigth: 255px;
`
export const HomePicture = styled.img`
    width: 100%;
    height: 255px;
    object-fit: cover;
    border-radius: 10px;

    `
export const ChevronLeftStyle = styled.img`
    width: 15px;
    height: 20px;
    position: absolute;
    top: 118px;
    left: 5px;
    cursor: pointer;
`
export const ChevronRightStyle = styled.img`
    width: 15px;
    height: 20px;
    position: absolute;
    top: 118px;
    right: 5px;
    cursor: pointer;
`
export const ImageCounter = styled.p`
    margin: 0 30px;
    text-align: center;
    position: relative;
    top: -30px;
    color:white;`