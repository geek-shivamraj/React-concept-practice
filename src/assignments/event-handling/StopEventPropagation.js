
export default function StopEventPropagation() {
  const toolbarHandler = () => {
    alert("StopEventPropogation: You clicked on the toolbar!!");
  };
  const playMovieHandler = () => {
    alert("Playing... SEP");
  };
  const uploadImageHandler = () => {
    alert("Uploading... SEP");
  };
  return (
    <div className="Toolbar" onClick={toolbarHandler}>
      <Button onSmash={playMovieHandler}>Play Movie SEP</Button>
      <Button onSmash={uploadImageHandler}>Upload Image SEP</Button>
    </div>
  );
}

function Button({ onSmash, children }) {
  const clickHandler = ((event) => {
    event.stopPropagation();
    onSmash();
  });
  
  return <button onClick={clickHandler}>{children}</button>;
}
