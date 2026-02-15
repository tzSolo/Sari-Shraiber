import { coursesData } from "../types";
import Course from "./course";

const Courses = () => {
    const { arrCourses } = coursesData;

    return <>
        <ul id="courses-list">
            {arrCourses.map((course, index) => {
                return <li key={index}>
                    <Course {...course} />
                </li>
            })}
        </ul>
    </>
}

export default Courses;