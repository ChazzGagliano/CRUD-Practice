export function PhotosShow(props) {

    const handleSubmit = (event) => {
        event.preventDefault()
        const params = new FormData(event.target)
        props.onUpdatePhoto(props.photo.id, params, () => event.target.reset())
    }
    const handleClick = () => {
        props.onDestroyPhoto(props.photo)
    }
    return (
        <div>
            <h1>Photo Information</h1>
            <p>Name: {props.photo.name}</p>
            <p>Url: {props.photo.url}</p>
            <p>Width: {props.photo.width}</p>
            <p>Height: {props.photo.height}</p>
        <form onSubmit={handleSubmit}>
            <div>
                Name: <input defaultValue={props.photo.name} name="name" type="text" />
            </div>
            <div>
                Url: <inpur defaultValue={props.photo.url} name="name" type="text" />
            </div>
            <div>
                Width: <input defaultValue={props.photo.url} name="name" type="text" />
            </div>
            <div>
                Height: <input defaultValue={props.photo.height} name="name" type="text" />
            </div>
            <button type="submit">Update Photo</button>
        </form>
        <button onClick={handleClick}>Destroy Photo</button>
        </div>
    )
}