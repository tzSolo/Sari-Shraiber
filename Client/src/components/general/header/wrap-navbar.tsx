import { useEffect, useState } from "react";
import type { LinkProps } from "../../types";
import Navbar from "./navbar";

const InitNavbar = () => {//כנראה שאפשר למחוק את זה
    const [links, setLinks] = useState<LinkProps[]>([{ to: 's', text: 's' }]);

    useEffect(() => {
        // fetch("HEADER LINKS")
        setLinks([
            { to: 'gallery', text: 'גלריה' },
            { to: 'courses', text: 'קורסים' },
            { to: '', text: 'פוטו שופ' },
            { to: '', text: 'אלבומים' },
            { to: '', text: 'פוטו שופ' },
            { to: '', text: 'אלבומים' },
            { to: '', text: 'עיבוד תמונה' }
        ]);
    }, []);

    return <>
        <header>
            <div className="container">
                <div>😊</div>
                <Navbar arrLinks={links} />
            </div>
        </header>
    </>
}

export default InitNavbar;