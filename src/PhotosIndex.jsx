export function PhotosIndex (props) {
    <div>
        <h1>All Photos </h1>
        {props.photos.map((photo) => (
            <div key={photo.id}>
                <h2>{photo.name}</h2>
                <img src={photo.url} />
                <p>Width: {photo.width}</p>
                <p>Height: {photo.height}</p>
                <button onClick={() => props.onShowPhoto(photo)}>More Info</button>
            </div>
        ))}
    </div>
}