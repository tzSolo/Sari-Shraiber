import { useContext } from "react";
import useCourses from "../../hooks/courses";
import Course from "./course";
import { userContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Courses = () => {
    const { courses } = useCourses();
    const { role } = useContext(userContext);
    const navigate = useNavigate();

    const sortedCourses = courses.sort((c1, c2) =>
        c1.course.serial_num - c2.course.serial_num
    )

    const handleAddCourse = () => {
        navigate("/add");
    }

    return <>
        {
            role.name === "admin"
            &&
            <button
                onClick={handleAddCourse}
                className="edit-button"
            >
                הוספת קורס
            </button>
        }

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