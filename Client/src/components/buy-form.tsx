import { useSearchParams } from "react-router-dom";
import BasicForm from "./basic-form";
import type { FullForm } from "../models/form";
import usePayment from "../hooks/payment";
import useEntity from "../hooks/crud-entity";

const BuyerForm = () => {
    const [params] = useSearchParams();
    const courseId = params.get("id");
    const { createEntity } = useEntity();
    const { handlePayment } = usePayment();

    const submitForm = async (data: any) => {
        const { first_name, last_name, email } = data;
        const userData = { first_name, last_name, email };
        createEntity("users", userData);
        handlePayment(courseId);
    }

    const buyerForm: FullForm = {
        id: "buy-form",
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