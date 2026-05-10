import { createContext, useState, type ReactNode } from "react";
import type { HeaderLink, LinkContext } from "../models/link";

const defaultLinks: HeaderLink[] = []
const defaultLinkContext: LinkContext = {
    links: defaultLinks,
    handleChangeLinks: (links) => { console.log(links) },
}

export const linksContext = createContext<LinkContext>(defaultLinkContext);

const LinkProvider = ({ children }: { children: ReactNode }) => {
    const [links, setLinks] = useState<HeaderLink[]>([]);

    const handleChangeLinks = (links: HeaderLink[]) => {
        setLinks(links);
    }

    return <linksContext.Provider value={{ links, handleChangeLinks }}>
        {children}
    </linksContext.Provider>
}

export default LinkProvider;