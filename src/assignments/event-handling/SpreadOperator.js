import { useState } from "react";

export default function SpreadOperator() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  const handleFirstNameChange = (event) => {
    setPerson({
        ...person,
        firstName: event.target.value
    });
    //person.firstName = event.target.value;
  };

  const handleLastNameChange = (event) => {
    setPerson({
        ...person,
        lastName: event.target.value
    });
    //person.lastName = event.target.value;
  };

  const handleEmailChange = (event) => {
    setPerson({
        ...person,
        email: event.target.value
    });
    //person.email = event.target.value;
  };

  return (
    <div>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>

      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>

      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}
        {", "}
        {person.lastName}
        {", "}({person.email})
      </p>
    </div>
  );
}
