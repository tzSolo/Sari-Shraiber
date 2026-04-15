import useStory from "../hooks/story";

const Home = () => {
    const { story } = useStory();

    return <>
        {story.map(caption => {
            return <p key={caption.id} className="p-home">
                {caption.text}
            </p>
        })}
    </>
}

export default Home;