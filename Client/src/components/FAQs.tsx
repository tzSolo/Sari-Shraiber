import useFAQs from "../hooks/FAQs";
import plus from "../images/circle-plus.svg"
import minus from "../images/circle-minus.svg"
import { faqs } from "../data/faqs";

const FAQs = () => {
    const { openId, handleOpen } = useFAQs();

    return <>
        <ul>
            {faqs.map((q, index) => {
                const isOpen = index === openId;

                return <li key={index} className={`faqs ${isOpen ? "open" : ""}`}>
                    <img
                        src={isOpen ? minus : plus}
                        alt="toggle"
                        onClick={() => handleOpen(index)}
                    />
                    <h2>{q.question}</h2>
                    <p>{q.answer}</p>
                </li>
            })}
        </ul>
    </>
}

export default FAQs;