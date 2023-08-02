export function PhotosShow(props) {
    return (
        <div>
        <h1>Photo Information</h1>
        <p>Name: {props.photo.name}</p>
        <p>Url: {props.photo.url}</p>
        <p>Weight: {props.photo.weight}</p>
        <p>Height: {props.photo.height}</p>
        </div>
    )
}