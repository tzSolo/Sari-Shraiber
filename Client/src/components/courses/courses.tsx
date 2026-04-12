import useCourses from "../../hooks/courses";
import Course from "./course";

const Courses = () => {
    const { courses } = useCourses();

    const sortedCourses = courses.sort((c1, c2) =>
        c1.course.serial_num - c2.course.serial_num
    )

    return <>
        <ul id="courses-list">
            {sortedCourses.map((course, index) => {
                return <li key={index}>
                    <Course {...course} />
                </li>
            })}
        </ul>
    </>
}

export default Courses;