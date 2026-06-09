import { Link, useNavigate } from "react-router-dom";
import type { FullCourse } from "../../models/course";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import useCrudEntity from "../../hooks/crud-entity";

const Course = ({ course, caption, image }: FullCourse) => {
    const { id, name, price, serial_num } = course;
    const { header, description } = caption;
    const { src, alt } = image;
    const { role } = useContext(userContext);
    const navigate = useNavigate();
    const { deleteEntity } = useCrudEntity();

    const handleEditCourse = () => {
        navigate("/edit", {
            state: {
                courseId: course.id,
                name,
                price,
                serial_num,
                captionId: caption.id,
                header,
                description,
                imageId: image.id,
                src,
                alt
            }
        });
    }

    const handleDeleteCourse = async () => {        
        await deleteEntity("courses", id);
        await deleteEntity("captions", caption.id);
        await deleteEntity("images", image.id);
    }

    return <>
        <div className="course">
            <h1>{name}</h1>
            <Link to={`/form?id=${serial_num}`} className="course-square">
                <div>
                    <h2>{header}</h2>
                    <p>{description}</p>
                    <span className="price">{price}{" "} ₪</span>
                </div>
                <img src={src} alt={alt} loading="lazy" />
            </Link>
        </div >

        {
            role.name === "admin"
            &&
            <>
                <div className="wrap-edit-buttons">
                    <button
                        onClick={handleEditCourse}
                        className="edit-button"
                    >
                        עריכה
                    </button>
                    <button
                        onClick={handleDeleteCourse}
                        className="edit-button"
                    >
                        מחיקה
                    </button>
                </div>
            </>
        }
    </>
}
export default Course;