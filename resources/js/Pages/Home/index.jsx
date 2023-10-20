import React, { } from "react";
import route from "ziggy";

export default function Home({  }) {

    return (
        <div>
            <a href={route('login')}>Login</a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex quasi placeat impedit earum non corrupti pariatur saepe eligendi explicabo numquam, fuga modi animi ratione cumque blanditiis atque? Neque, suscipit?</p>
        </div>
    )
}