import { structuredPeople } from './People.js';

export default function StructuredPeopleList() {
    const chemists = structuredPeople.filter(person => person.profession === 'chemist');
    const listItems = chemists.map(person => {
        return (
            <li>
                <img src={getImageUrl(person)} alt={person.name}/>
                <p><b>{person.name}:</b>
                {' ' + person.profession + ' '} known for {person.accomplishment}
                </p>
            </li>
        );
    });
    return (<ul>{listItems}</ul>);
}

function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
