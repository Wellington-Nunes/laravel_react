import React, { useState } from "react";
import { router } from "@inertiajs/react";
import route from "ziggy";

export default function Login() {
    const [values, setValues] = useState({ email: "", password: "" });

    function handleChange(e) {
        e.preventDefault();
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("auth"),  values );
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>

            <a href={route('register')}>ir para register</a>

        </div>
    );
}
