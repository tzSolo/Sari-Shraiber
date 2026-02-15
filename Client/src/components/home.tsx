import { theFullStory } from "./types";

const Home = () => {
    const { text } = theFullStory;

    return <>
        {text.map(p => {
            return <p className="home">{p}</p>
        })}
    </>
}

export default Home;