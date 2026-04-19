import type { FullForm } from "../models/form";
import BasicForm from "./basic-form";

const Login = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const onSubmit = async (data: any) => {
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const token = await response.json();
        console.log(token);
    }

    const loginForm: FullForm = {
        count: 2,
        inputs: [
            { name: "email", hebrew: "מייל" },
            { name: "password", hebrew: "סיסמה" }
        ],
        button: { type: "submit", caption: "כניסה" },
        submit: onSubmit
    }

    return <>
        <BasicForm {...loginForm} />
    </>
}

export default Login;