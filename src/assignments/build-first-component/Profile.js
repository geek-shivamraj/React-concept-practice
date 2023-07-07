import React from "react";

export default function Gallery() {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile />
            <Profile />
        </section>
    );
}

function Profile() {
    return (
        <div>
            <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        </div>
    );
}