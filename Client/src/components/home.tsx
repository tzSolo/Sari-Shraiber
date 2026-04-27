import { story } from "../data/story";

const Home = () => {

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