import { useState } from "react";

export default function PrincipleAvoidRedundant () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    //const [fullName, setFullName] = useState('');

    const fullName = firstName + '-------' + lastName;

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
        //setFullName(event.target.value + ' ' + lastName);
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
       // setFullName(firstName + ' ' + event.target.value);
    }

    return (
        <>
            <h2>Let's check you in</h2>
            <label>
                First name: {' '}
                <input value={firstName} onChange={firstNameHandler}/>
            </label>
            <label>
                Last name: {' '}
                <input value={lastName} onChange={lastNameHandler}/>
            </label>
            <p>
                Your ticket will be issued to: <b>{fullName}</b>
            </p>
        </>
    );
}