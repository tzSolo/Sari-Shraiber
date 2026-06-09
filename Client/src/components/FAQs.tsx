import useFAQs from "../hooks/FAQs";
import plus from "../images/circle-plus.svg"
import minus from "../images/circle-minus.svg"
import ReactMarkdown from "react-markdown"

const FAQs = () => {
    const { faqs, openId, handleOpen } = useFAQs();
    
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

                    <ReactMarkdown
                        components={{
                            a: ({ node, ...props }) => (
                                <a {...props} target="_blank" rel="noreferrer" />
                            ),
                        }}
                    >{q.answer}
                    </ReactMarkdown>
                </li>
            })}
        </ul>
    </>
}

export default FAQs;