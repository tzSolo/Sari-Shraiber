import { Link } from "react-router-dom";
import type { FullCourse } from "../../models/course";

const Course = ({ course, caption, image }: FullCourse) => {
    const { id, name, price } = course;
    const { header, description, style } = caption;
    const { src, alt } = image;

    return <>
        <div className="course">
            <h1>{name}</h1>
            <Link to={`/form?id=${id}`} className="course-square">
                <div style={style}>
                    <h2>{header}</h2>
                    <p>{description}</p>
                    <span className="price">{price}{" "}ש"ח</span>
                </div>
                <img src={src} alt={alt} loading="lazy" />
            </Link>
        </div>
    </>
}
export default Course;