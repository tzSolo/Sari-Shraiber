import type { FullForm } from "../models/form";
import BasicForm from "./basic-form";

const Login = () => {
    const loginForm: FullForm = {
        id: "",
        count: 2,
        inputs: [
            { name: "email", hebrew: "מייל" },
            { name: "password", hebrew: "סיסמה" }
        ],
        button: { type: "submit", caption: "כניסה" }
    }

    return <>
        <BasicForm {...loginForm} />
    </>
}

export default Login;