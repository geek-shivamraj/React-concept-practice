import React from "react";

export default function PackingList() {
    return(
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item1 isPacked={true} name="Space suit" />
                <Item2 isPacked={true} name="Helmet with a golden leaf" />
                <Item3 isPacked={false} name="Photo of Tam" />
            </ul>
        </section>
    );
}

/*
* There are 3 ways of conditional rendering

1. Using if / else statement
2. Using ternary operator ? :
3. Using logical AND (&&) operator

*/

function Item1({ name, isPacked }) {
    if(isPacked) {
        return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
}

function Item2({ name, isPacked }) {
    return (
        <li className="item">{ isPacked ? name + ' ✔' : name} </li>
    );
}

function Item3({ name, isPacked }) {
    return (
        <li className="item">{name} {isPacked && '✔'} </li>
    );
}