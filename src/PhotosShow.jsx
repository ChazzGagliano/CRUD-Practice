export function PhotosShow(props) {
    const handleClick = () => {
        props.onDestroyPhoto(props.photo)
    }
    return (
        <div>
        <h1>Photo Information</h1>
        <p>Name: {props.photo.name}</p>
        <p>Url: {props.photo.url}</p>
        <p>Weight: {props.photo.weight}</p>
        <p>Height: {props.photo.height}</p>
        <button onClick={handleClick}>Destroy Photo</button>
        </div>
    )
}