import PhotosIndex from "./PhotosIndex"
import axios from "axios"
import {useState, useEffect} from "react"


export function Content() {
    const photos = [
        {id: 1, url: "https://via.placeholder.com/150", width: 300, height: 400}
    ]
    const handleIndexPhotos = () => {
        console.log("handleIndexPhotos")
        axios.get("http://localhost:3000/photos.json").then((respose) => {
            console.log(response.data)
            setPhotos(response.data)
        })
    }

    useEffect(handleIndexPhotos, [])
    
    return (
        <div>
            <PhotosIndex photos={photos}/>
        </div>
        )
}