import { PhotosIndex } from "./PhotosIndex"
import { PhotosNew } from "./PhotosNew"
import { Modal } from "./Modal"
import { PhotosShow } from "./PhotosShow"
import axios from "axios"
import { useState, useEffect } from "react"


export function Content() {

const [photos, setPhotos] = useState([])
const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false)
const [currentPhoto, setCurrentPhoto] = useState({})
const handleIndexPhotos = () => {
    console.log("handleIndexPhotos")
    axios.get("http://localhost:3000/photos.json").then((response) => {
        console.log(response.data)
        setPhotos(response.data)
    })
}
const handleCreatePhotos = (params, successCallback) => {
    console.log("handleCreatePhotos")
    axios.post("http://localhost:3000/photos.json", params).then((response) => {
        setPhotos([...photos, response.data])
        successCallback()
    })
}
const handleShowPhoto = (photo) => {
    console.log("handleShowPhoto", photo)
    setIsPhotosShowVisible(true)
    setCurrentPhoto(photo)
}
const handleClose = () => {
    console.log("handleClose")
    setIsPhotosShowVisible(false)
}
 
useEffect(handleIndexPhotos, [])
    return (
        <div>
            <PhotosNew onCreatePhoto={handleCreatePhoto} />
            <PhotosIndex photos={photos} onShowPhoto={handleShowPhoto} />
            <Modal show={isPhotoShowVisible} onClose={handleClose}>
                <PhotosShow photo={currentPhoto} />
            </Modal>
        </div>
    )
}