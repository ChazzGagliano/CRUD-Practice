export function PhotosIndex (props) {
    return (
        <div>
            <h1>All Photos</h1>
            {props.photos.map((photo) => (
                <div key={photo.id}>
                <h2>{photo.name}</h2>
                <p>Width: {photo.width}</p>
                <p>Height: {photo.height}</p>
                </div>    
            ))}
        </div>
    )
}