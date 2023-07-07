
export default function PreventDefault() {
    
    const submitHandler = (event) => {
        event.preventDefault();
        alert('Submitting!...');
    }

    return (
        <form onSubmit={submitHandler}>
            <input />
            <button>Send</button>
        </form>
    );
}


