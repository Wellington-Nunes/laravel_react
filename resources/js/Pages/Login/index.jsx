import React, { } from "react";
import route from "ziggy";

export default function Home({ }) {

    return (
        <div>
            <a href={route('index')}>index</a>
            <p>login</p>
        </div>
    )
}