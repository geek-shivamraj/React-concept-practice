import { useState } from "react";

export default function SpreadOperatorContd() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  const handleChange = (event) => {
    setPerson({
      ...person,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <label>
        First name Ctd:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name Ctd:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email Ctd:
        <input name="email" value={person.email} 
        onChange={handleChange} />
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
