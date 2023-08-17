export function PhotosIndex(props) {
    return (
        <div>
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