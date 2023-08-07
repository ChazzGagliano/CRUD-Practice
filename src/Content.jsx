import { PhotosIndex } from "./PhotosIndex"
import axios from "axios"
import { useState, useEffect } from "react"

export function Content() {
   
    const [photos, setPhotos] = useState([])
    const handleIndexPhotos = () => {
        console.log("handleIndexPhotos")
        axios.get("http://localhost:3000/photos.json").then((response) => {
            console.log(response.data)
            setPhotos(response.data)
        })
    }

    useEffect(handleIndexPhotos, [])

    return (
        <div>
            <PhotosIndex photos={photos} />
        </div>
        )
   
}