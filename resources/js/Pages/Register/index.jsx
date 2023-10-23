import React, { useState } from "react";
import { router } from "@inertiajs/react";
import route from "ziggy";

export default function Register() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

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
        router.post(route("createUser"),  values );
    }

    return (
        <div>
            <h1>Registrar</h1>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                    />
                </div>
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
                <div>
                    <label htmlFor="password_confirmation">Confirmar Senha:</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={values.password_confirmation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" onClick={handleSubmit} >Registrar</button>
            </form>

            <a href={route('login')}>ir para login</a>

        </div>
    );
}
