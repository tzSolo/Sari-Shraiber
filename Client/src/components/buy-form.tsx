// import { useSearchParams } from "react-router-dom";
import BasicForm from "./basic-form";
import type { FullForm } from "../models/form";

const BuyerForm = () => {
    // const [params] = useSearchParams();
    // const courseId = params.get("id");

    const buyerForm: FullForm = {
        id: "personal-details-form",
        count: 4,
        inputs: [
            { name: "first-name", hebrew: "שם פרטי" },
            { name: "last-name", hebrew: "שם משפחה" },
            { name: "email", hebrew: "מייל" },
            { name: "confirm", hebrew: "אני מתחייבת שלא להעביר את הקורס ולצפות בו באופן פרטי בלבד !", type: "checkbox" },
        ],
        button: { type: "submit", caption: "לתשלום והורדה" }
    }
    return <>
        <BasicForm {...buyerForm} />
    </>
}

export default BuyerForm;