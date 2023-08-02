import { PhotosIndex } from "./PhotosIndex";
import { useState, useEffect } from "react";
import { PhotosNew } from "./PhotosNew";
import { PhotosShow } from "./PhotosShow"
import { Modal } from "./Modal"

export function Content() {
    const [photos, setPhotos] = useState([]);

    const handleIndexPhotos = () => {
        console.log("http://localhost:3000/photos.json").then((response) => {
            console.log(response.data);
            setPhotos(response.data);
        })
    }
    const handleCreatePhoto = (params, successCallback) => {
             console.log("handleCreatePhoto", params);
             axios.post("http://localhost:3000/photos.json", params).then((response) => {
               setPhotos([...photos, response.data]);
               successCallback();
             });
           };

    const handleShowPhoto = (photo) => {
        console.log("handleshowPhoto", photo),
        setIsPhotoShowVisible(true);
        setCurrentPhoto(photo)
    }
    const handleclose = () => {
        console.log("handleClose")
        setIsShowVisible(false)
    }
    useEffect(handleIndexPhotos, []);
    
    return (
        <>
        <PhotosIndex photos={photos} />
        <PhotosNew onCreatePhoto={handleCreatePhoto} onShowPhoto={handleShowPhoto}/>
        <Modal show={isPhotosShowVisible} onClose={handleClose}>
            <PhotosShow photo={currentPhoto} />
        </Modal>
        </>
        )
    }