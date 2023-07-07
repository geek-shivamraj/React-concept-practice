
export default function Signup() {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Submitting!!");
        //alert("Submitting!!!")
    }
    return (
        <form onSubmit={submitHandler}>
            <input />
            <button>Send</button>
        </form>
    ); 
}


