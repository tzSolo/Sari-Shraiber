import type { CourseProps } from "../types";
import { Link } from "react-router-dom";

const Course = ({ header, text, imgSrc, imgAlt, link }: CourseProps) => {
    return <>
        <Link to={link} className="course">
            <div>
                <h2>{header}</h2>
                <p>{text}</p>
            </div>
            <img src={imgSrc} alt={imgAlt} loading="lazy"/>
        </Link>
    </>
}
export default Course;