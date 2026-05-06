import { useState } from "react";
import type { HeaderLink } from "../models/link";
import { useLocation } from "react-router-dom";

const baseLinks = [
    { to: '/home', text: 'בית' },
    { to: '/faqs', text: 'שאלות נפוצות' },
    { to: '/courses', text: 'קורסים' }
];

const useLink = () => {
    const location = useLocation();
    const firstActive = location.pathname === "/" ? "/home" : location.pathname;
    const [active, setActive] = useState<string>(firstActive);

    const handleClick = (name: string) => {
        setActive(name);
    };

    const linksList: HeaderLink[] = baseLinks.map(link => ({
        ...link,
        active: link.to,
        handleClick
    }));

    return { linksList, active, handleClick };
};

export default useLink;