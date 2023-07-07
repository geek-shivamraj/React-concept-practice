const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export default function PeopleList() {
  const listItems = people.map((person) => <li>{person}</li>);

  // OR

  // const listItems = people.map(person => {
  //     return <li>{person}</li>
  // });

  return <ul>{listItems}</ul>;
}