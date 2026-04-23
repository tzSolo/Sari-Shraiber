import type { ElementType } from "react";
import { story } from "../data/story";

const Home = () => {
    const elements = [];

    for (let i = 0; i < story.length; i++) {
        const caption = story[i];
        const Tag = caption.tag as ElementType;
        const className = `${caption.classes.join(" ")} p-home`;

        if (caption.tag === "span") {
            elements.push(
                <p key={i} className="p-home">
                    <span className={className}>
                        {caption.text}</span>
                    {story[i + 1]?.text}
                </p >
            );
            i++;
        } else {
            elements.push(
                <Tag key={i} className={className}>
                    {caption.text}
                </Tag>
            );
        }
    }

    return <>
        {elements}
    </>;
};

export default Home;