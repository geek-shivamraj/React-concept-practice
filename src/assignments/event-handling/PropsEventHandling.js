/*
    Here we're passing event handlers as props

*/
export default function Toolbar () {
    return (
        <div>
            <PlayButton movieName="Kiki's Deleivery Service" />
            <UploadButton />
        </div>
    );
}

function PlayButton({movieName}) {
    const handlePlayClick = () => {
        alert(`Playing ${movieName}!`);
        //alert('Playing ' + movieName + '!');
        //alert("Playing " + movieName + "!");
    }
    return (
        <Button onSmash={handlePlayClick}>Play "{movieName}"</Button>
    );
}

function UploadButton() {

    const uploadButtonHandler = () => {
        alert('Uploading...')
    }
    return (
        <Button onSmash={uploadButtonHandler}>Upload Image</Button>
    );
}

function Button({ onSmash, children }) {
    return (
        <button onClick={onSmash}>{children}</button>
    );
}