import useCourses from "../../hooks/courses";
import Course from "./course";

const Courses = () => {
    const { courses } = useCourses();

    return <>
        <ul id="courses-list">
            {courses.map((course, index) => {
                return <li key={index}>
                    <Course {...course} />
                </li>
            })}
        </ul>
    </>
}

export default Courses;