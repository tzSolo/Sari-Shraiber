import BasicForm from "../basic-form";
import type { FullForm } from "../../models/form";
import { useLocation, useNavigate } from "react-router-dom";
import useCrudEntity from "../../hooks/crud-entity";

const defaultState = {
    courseId: 0,
    name: "",
    price: 0,
    serial_num: "",
    captionId: 0,
    header: "",
    description: "",
    imageId: 0,
    src: "",
    alt: ""
};

const CourseForm = () => {
    const { state } = useLocation();
    const isEditMode = !!state;
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
    } = state ?? defaultState;
    const { createEntity, updateEntity } = useCrudEntity();
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        const { name, price, header, description, src, alt } = data;
        const course = { name, price, caption_id: captionId, image_id: imageId, serial_num };
        const caption = { header, description };
        const image = { src, alt };

        if (isEditMode) {
            updateEntity("courses", courseId, { id: courseId, ...course });
            updateEntity("captions", captionId, { id: captionId, ...caption });
            updateEntity("images", imageId, { id: imageId, ...image });
        }
        else {
            createEntity("courses", course);
            createEntity("captions", caption);
            createEntity("images", image);
        }

        navigate("courses");
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
            { name: "alt", hebrew: "תיאור תמונה", value: alt },
        ],
        button: { type: "submit", caption: isEditMode ? "שמור שינויים" : "הוספת הקורס" },
        submit: onSubmit
    }

    return <>
        <BasicForm {...courseDetailsForm} />
    </>
}
export default CourseForm;