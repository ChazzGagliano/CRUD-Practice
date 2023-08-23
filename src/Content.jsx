import { useState, useEffect } from "react"
import axios from "axios"
import PhotosIndex from "PhotosIndex.jsx"




export function Content () {
    const [photos, setPhotos] = useState([])
    const HandleIndexPhotos = () => {
        console.log("handleIndexPhotos")
        axios.get("http://localhost:3000/photos.json").then((response) => {
            console.log(response.data)
            setPhotos(response.data)
        })
    }

    useEffect(handleIndexPhotos, [])

    return (
        <div>
            < PhotosIndex photos={photos}/>
        </div>
    )
}