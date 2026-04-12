import type { ElementType } from "react";
import useStory from "../hooks/story";

const Home = () => {
    const { story } = useStory();

    const sortedStory = [...story].sort(
        (a, b) => a.serial_num - b.serial_num
    );

    return <>
        {sortedStory.map(caption => {
            const Tag = caption.html_tag as ElementType;

            return <Tag className="home">
                {caption.text}
            </Tag>
        })}
    </>
}

export default Home;