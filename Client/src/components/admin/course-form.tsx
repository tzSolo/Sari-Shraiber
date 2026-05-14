import BasicForm from "../basic-form";
import type { FullForm } from "../../models/form";
import { useLocation } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL + '/entities';

const CourseForm = () => {
    const { state } = useLocation();
    const {
        courseId,
        name,
        price,
        serial_num,
        captionId,
        header,
        description,
        imageId,
        src,
        alt
    } = state;


    const onSubmit = async (data: any) => {
        try {
            const { name, price, header, description, src, alt } = data;
            const course = { id: courseId, name, price, caption_id: captionId, image_id: imageId, serial_num };
            const caption = { id: captionId, header, description };
            const image = { id: imageId, src, alt };

            const [courseRes, captionRes, imageRes] = await Promise.all([
                fetch(`${baseUrl}/courses/${courseId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(course)
                }),
                fetch(`${baseUrl}/captions/${captionId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(caption)
                }),
                fetch(`${baseUrl}/images/${imageId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(image)
                })
            ]);

            if (!courseRes.ok) {
                throw new Error("Cannot update course.");
            }

            if (!captionRes.ok) {
                throw new Error("Cannot update caption.");
            }

            if (!imageRes.ok) {
                throw new Error("Cannot update image.");
            }
        }
        catch (e: any) {
            console.error(e.message);
        }
    }

    const courseDetailsForm: FullForm = {
        id: "course-details",
        count: 6,
        inputs: [
            { name: "name", hebrew: "שם הקורס", value: name },
            { name: "price", hebrew: "מחיר", value: price },
            { name: "header", hebrew: "כותרת", value: header },
            { name: "description", hebrew: "תיאור קצר", value: description },
            { name: "src", hebrew: "קישור לתמונה", value: src },
            { name: "alt", hebrew: "שם התמונה כשלא מצליח לטעון", value: alt },
        ],
        button: { type: "submit", caption: "שמור שינויים" },
        submit: onSubmit
    }

    return <>
        <BasicForm {...courseDetailsForm} />
    </>
}
export default CourseForm;