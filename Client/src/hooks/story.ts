import { useEffect, useState } from "react";
import type { StoryCaption } from "../models/story";

const baseUrl = import.meta.env.VITE_BASE_URL;

const useStory = () => {
    const [story, setStory] = useState<StoryCaption[]>([]);

    useEffect(() => {
        const fetchStory = async () => {
            const response = await fetch(`${baseUrl}/story`)
            if (response.ok) {
                const data = await response.json();
                setStory(data);
            }
        }

        fetchStory();
    })
    return { story }
}

export default useStory;