
export default function EventPropagation() {

    const toolbarHandler = () => {
        alert("You clicked on the toolbar!!");
    }

    const playMovieHandler = () => {
        alert("Playing!!");
    }

    const uploadImageHandler = () => {
        alert("Uploading...");
    }

    return (
       <div className="Toolbar" onClick={toolbarHandler}>
            <button onClick={playMovieHandler}>Play Movie</button>
            <button onClick={uploadImageHandler}>Upload Image</button>
       </div> 
    );
}