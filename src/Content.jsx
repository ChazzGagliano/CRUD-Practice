import { PhotosIndex } from "./PhotosIndex";
import { useState, useEffect } from "react";
import { PhotosNew } from "./PhotosNew";

export function Content() {
    const [photos, setPhotos] = useState([]);

    const handleIndexPhotos = () => {
        console.log("http://localhost:3000/photos.json").then((response) => {
            console.log(response.data);
            setPhotos(response.data);
        })
    }
    const handleCreatePhotos = (params, sucessCallback) => {
        console.log("handleCreatePhoto", params)
        axios.post("http://localhost:3000/photos.json", params).then((response) => {
            setPhotos([...photos, response.data])
            successCallbackj()
        })
    }

    useEffect(handleIndexPhotos, []);
    
    return (
        <PhotosNew onCreatePhoto={handleCreatePhoto} />
        <PhotosIndex photos={photos} />
    )
  }