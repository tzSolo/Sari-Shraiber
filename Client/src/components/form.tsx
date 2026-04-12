import { useEffect, useState } from "react";
import type { PersonalDetails } from "../models/personal-details";
import { useSearchParams } from "react-router-dom";

const Form = () => {
    const [form, setForm] = useState<PersonalDetails>({
        first_name: "",
        last_name: "",
        email: ""
    });

    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [valid, setValid] = useState<boolean>(false);
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
        console.log(courseId);
    };

    useEffect(() => {
        setValid(
            form.first_name.trim() !== "" &&
            form.last_name.trim() !== "" &&
            form.email.trim() !== "" &&
            confirmed
        );
    }, [form, confirmed])
    
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
                    checked={confirmed}
                    onChange={(({target})=>setConfirmed(target.checked))}
                />
                <label htmlFor="confirm">אני מתחייבת שלא להעביר את <br />הקורס ולצפות בו באופן פרטי בלבד!</label>
            </div>
            <button type="submit" disabled={!valid}>לתשלום והורדה</button>
        </form>
    </>
}

export default Form;