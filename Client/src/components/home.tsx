import { useEffect } from "react";
import useStory from "../hooks/story";

const Home = () => {
    const { story } = useStory();

    useEffect(() => {
        story.sort((s1, s2) =>
            s1.serial_num - s2.serial_num
        );
    }, [])
    return <>
        {story.map(caption => {
            return <p className="home">{caption.text}</p>
        })}
    </>
}

export default Home;