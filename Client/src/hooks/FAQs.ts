import { useEffect, useState } from "react";
import type { Faq } from "../models/faq";

const baseUrl = import.meta.env.VITE_BASE_URL + '/entities';

const useFAQs = () => {
    const [faqs, setFaqs] = useState<Faq[]>([]);
    const [openId, setOpenId] = useState<number>();

    const fetchFaqs = async () => {
        try {
            const response = await fetch(`${baseUrl}/faqs`);

            if (!response.ok) {
                throw new Error("Cannot fetch FAQs from DB.");
            }

            const result = await response.json();
            setFaqs(result);
        }
        catch (e: any) {
            console.error(e.message);
        }
    }

    const handleOpen = (index: number) => {
        if (index === openId) {
            setOpenId(-1);
            return;
        }
        setOpenId(index);
    }

    useEffect(() => {
        fetchFaqs();
    }, [])

    return { faqs, openId, handleOpen }
}

export default useFAQs;