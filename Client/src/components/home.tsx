import useStory from "../hooks/story";

const Home = () => {
    const { story } = useStory();

    return <>
        {story.map(p => {
            return <p className="home">{p}</p>
        })}
    </>
}

export default Home;