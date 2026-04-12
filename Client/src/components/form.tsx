import { useState } from "react";
import type { PersonalDetails } from "../models/personal-details";
import { useSearchParams } from "react-router-dom";

const Form = () => {
    const [form, setForm] = useState<PersonalDetails>({
        id: 1,
        first_name: "",
        last_name: "",
        email: ""
    });
    const [valid, setValid] = useState();
    const [params] = useSearchParams();
    const courseId = params.get("id");

    const handleChange = (target: any) => {
        const { name, value } = target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (form.first_name === "" || form.last_name === "" || form.email === "") {

        }
        console.log(courseId);
    };

    return <>
        <form onSubmit={handleSubmit} className="personal-details-form">
            <div>
                <label htmlFor="first_name">שם פרטי :</label>
                <input
                    id="first_name"
                    name="first_name"
                    value={form.first_name}
                    onChange={({ target }) => handleChange(target)}
                />
            </div>
            <div>
                <label htmlFor="last_name">שם משפחה :</label>
                <input
                    id="last_name"
                    name="last_name"
                    value={form.last_name}
                    onChange={({ target }) => handleChange(target)}
                />
            </div>
            <div>
                <label htmlFor="email">מייל :</label>
                <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={({ target }) => handleChange(target)}
                />
            </div>
            <div id="confirm-checkbox">
                <input
                    id="confirm"
                    name="confirm"
                    type="checkbox"
                />
                <label htmlFor="confirm">אני מתחייבת שלא להעביר את <br />הקורס ולצפות בו באופן פרטי בלבד!</label>
            </div>
            <button type="submit">לתשלום והורדה</button>
        </form>
    </>
}

export default Form;