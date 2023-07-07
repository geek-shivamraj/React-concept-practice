export default function DemoToolbar() {
  return <div>
    <AlertButton message="Playing!">Play Movie</AlertButton>
    <AlertButton message="Uploading!!">Upload Image</AlertButton>
  </div>;
}

function AlertButton({ message, children }) {
    
    const handleClick = () => {
        alert(message);
    }
    // return (
    //     <button onClick={() => alert(message)}>
    //         {children}
    //     </button>
    // );

    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
}
