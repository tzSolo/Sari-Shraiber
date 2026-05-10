import { useEffect } from "react";
import { story } from "../data/story";

const baseUrl = import.meta.env.VITE_BASE_URL;

const Home = () => {

    useEffect(() => {
        const awakeServer = async () => {

            let response, count = 0;

            do {
                response = await fetch(`${baseUrl}/awake`);
                count++;
            }
            while (!response.ok && count < 5)
        }

        awakeServer();
    }, []);

    return <>
        {story.map((c, index) => {
            const className = `${c.classes.join(" ")} p-home`;
            const indexOfColon = c.text.indexOf(":");
            const pContent = indexOfColon ? c.text.substring(indexOfColon + 1) : c.text;
            const spanContent = c.text.replace(pContent, "");

            return <p key={index} className={className}>
                {indexOfColon &&
                    <span className={"colored"}>
                        {spanContent}
                    </span>
                }
                {pContent}
            </p>
        })}
    </>;
};

export default Home;