import { useState } from "react";

export default function PrincipleAvoidContra2 () {

    const [text, setText] = useState('');
    const [status, setStatus] = useState('typing');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('sending');
        await sendMessage();
        setStatus('sent');
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';

    if(isSent) {
        return <h1>Thanks for feedback! Cont...</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony contd?</p>
            <textarea disabled={isSending} value={text} 
            onChange={e => setText(e.target.value)}/>

            <br />
            <button disabled={isSending} type="submit">Send</button>
            {isSending && <p>Sending...</p>}
        </form>
    );
}

// Pretend to send a message.
function sendMessage(text) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }