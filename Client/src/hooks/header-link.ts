import { useState } from "react";
import type { HeaderLink } from "../models/link";

const baseLinks = [
    { to: '/', text: 'בית' },
    { to: '/faqs', text: 'שאלות נפוצות' },
    { to: '/courses', text: 'קורסים' }
];

const useLink = () => {
    const [active, setActive] = useState<string>('בית');

    const handleClick = (name: string) => {
        setActive(name);
    };

    const linksList: HeaderLink[] = baseLinks.map(link => ({
        ...link,
        active: link.text,
        handleClick
    }));

    return { linksList, active, handleClick };
};

export default useLink;