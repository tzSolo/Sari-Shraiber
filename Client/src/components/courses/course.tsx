import { Link, useNavigate } from "react-router-dom";
import type { FullCourse } from "../../models/course";
import { useContext } from "react";
import { userContext } from "../../context/userContext";

const Course = ({ course, caption, image }: FullCourse) => {
    const { name, price, serial_num } = course;
    const { header, description } = caption;
    const { src, alt } = image;
    const { role } = useContext(userContext);
    const navigate = useNavigate();

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
            <button
                onClick={handleEditCourse}
                className="edit-button"
            >
                עריכה
            </button>
        }
    </>
}
export default Course;