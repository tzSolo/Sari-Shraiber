import { useNavigate } from "react-router-dom";
import type { FullForm } from "../models/form";
import BasicForm from "./basic-form";
import { useContext } from "react";
import { userContext } from "../context/userContext";
import { linksContext } from "../context/linkContext";

const Login = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();
    const { handleUserChange } = useContext(userContext);
    const { handleChangeLinks } = useContext(linksContext);

    const onSubmit = async (data: any) => {
        try {
            const { email, password } = data;
            const response = await fetch(`${baseUrl}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error("Invalid credentials or server error");
            }

            const result = await response.json();
            console.log(result);
            if (result.accessToken) {
                const isValidJWT = result.accessToken.split(".").length === 3;

                if (!isValidJWT) {
                    throw new Error("Invalid token format");
                }

                handleUserChange("state", "logged in");
                handleChangeLinks(result.links)
                navigate("/courses");
            }
            else {
                throw new Error("No token returned");
            }
        }
        catch (e: any) {
            console.error(e.message);
        }
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