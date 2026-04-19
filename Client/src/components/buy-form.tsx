import { useSearchParams } from "react-router-dom";
import BasicForm from "./basic-form";
import type { FullForm } from "../models/form";

const BuyerForm = () => {
    const [params] = useSearchParams();
    const courseId = params.get("id");
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const submitForm = async (data: any) => {
        const { first_name, last_name, email } = data;
        const userData = { first_name, last_name, email };

        const response = await fetch(`${baseUrl}/entities/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const newUser = await response.json();
        console.log(newUser);

        //navigate to uPay with courseID
        window.open(`?courseId=${courseId}`);
    }

    const buyerForm: FullForm = {
        count: 4,
        inputs: [
            { name: "first_name", hebrew: "שם פרטי" },
            { name: "last_name", hebrew: "שם משפחה" },
            { name: "email", hebrew: "מייל" },
            { name: "confirm", hebrew: "אני מתחייבת שלא להעביר את הקורס ולצפות בו באופן פרטי בלבד !", type: "checkbox" },
        ],
        button: { type: "submit", caption: "לתשלום והורדה" },
        submit: submitForm
    }
    return <>
        <BasicForm {...buyerForm} />
    </>
}

export default BuyerForm;