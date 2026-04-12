import { useEffect } from "react";
import useCourses from "../../hooks/courses";
import Course from "./course";

const Courses = () => {
    const { courses } = useCourses();

    useEffect(() => {
        courses.sort((c1, c2) =>
             c1.course.order_num - c2.course.order_num
        )
    }, []);

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