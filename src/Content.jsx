import axios from "axios"
import {useState, useEffect} from "react"
import PhotosIndex from "./PhotosIndex"


export function Content() {
    const [photos, setPhotos] = useState([])

    const handleIndexPhotos = () => {
        console.log("handleIndexPhotos")
        axios.get("http://localhost:3000/photos.json").then((response) => {
            setPhotos(response.data)
            console.log(response.data)
        })
    }
    useEffect(handleIndexPhotos, [])

    return (
        <div>
            <PhotosIndex photos={photos}/>
        </div>
    )
}