import { useEffect, useState } from "react";
import type { StoryCaption } from "../models/story";

const baseUrl = import.meta.env.VITE_BASE_URL;

const useStory = () => {
    const [story, setStory] = useState<StoryCaption[]>([]);

    const sortStory = (story: StoryCaption[]) => {
        return [...story].sort(
            (a, b) => a.serial_num - b.serial_num
        )
    };

    useEffect(() => {
        const fetchStory = async () => {
            const response = await fetch(`${baseUrl}/entities/story`)
            if (response.ok) {
                const data = await response.json();
                const sortedStory = sortStory(data);
                setStory(sortedStory);
            }
        }

        fetchStory();
    }, [])
    return { story }
}

export default useStory;