import { useEffect, useState } from "react";

const baseUrl = import.meta.env.BASE_URL;

const useStory = () => {
    const [story, setStory] = useState<string[]>(["123"]);

    useEffect(() => {
        const fetchStory = async () => {
            const response = await fetch(`${baseUrl}/captions/1`)
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