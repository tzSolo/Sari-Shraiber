import { useEffect, useState } from "react";
import type { Course, FullCourse } from "../models/course";
import type { Caption } from "../models/caption";
import type { Image } from "../models/image";

const baseUrl = import.meta.env.VITE_BASE_URL;

const useCourses = () => {
    const [courses, setCourses] = useState<FullCourse[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch(`${baseUrl}/courses`);
                if (!res.ok) throw new Error("Failed to fetch courses");

                const courses: Course[] = await res.json();

                const fullCourses = await Promise.all(
                    courses.map(async (course) => {
                        const [captionRes, imageRes] = await Promise.all([
                            fetch(`${baseUrl}/captions/${course.caption_id}`),
                            fetch(`${baseUrl}/images/${course.image_id}`)
                        ]);

                        if (!captionRes.ok || !imageRes.ok) {
                            throw new Error("Failed to fetch related data");
                        }

                        const caption: Caption = await captionRes.json();
                        const image: Image = await imageRes.json();

                        return {
                            course,
                            caption,
                            image
                        };
                    })
                );

                setCourses(fullCourses);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCourses();
    }, []);

    return { courses };
};

export default useCourses;