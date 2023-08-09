export function PhotosIndex(props) {
    return (
        <div>
            <h1>All Photos</h1>
            {props.photos.map((photo) => (
                <div key={photos.id}>
                    <h2>{photo.name}</h2>
                    <img src={photo.url}/>
                    <p>Height: {photo.height}</p>
                    <p>Width: {photo.width}</p>
                </div>
            ))}
        </div>
    )
        
    
}