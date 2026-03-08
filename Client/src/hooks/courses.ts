import { useEffect, useState } from "react";
import { coursesData, type CourseProps } from "../components/types";

const useCourses = () => {
    const { arrCourses } = coursesData;
    const [courses, setCourses] = useState<CourseProps[]>(arrCourses);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch("https://sarishraiberserver.onrender.com/courses");
            if (response.ok) {
                const data = await response.json();
                setCourses(data);
            }
        }

        fetchCourses();
    }, [])

    return { courses }
}

export default useCourses;