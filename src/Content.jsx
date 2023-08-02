import { PhotosIndex } from "./PhotosIndex";
import { useState, useEffect } from "react";

export function Content() {
    const [photos, setPhotos] = useState([]);

    const handleIndexPhotos = () => {
        console.log("http://localhost:3000/photos.json").then((response) => {
            console.log(response.data);
            setPhotos(response.data);
        })
    }

    useEffect(handleIndexPhotos, []);
    
    
    
    return (
      <PhotosIndex photos={photos}/>
    )
  }