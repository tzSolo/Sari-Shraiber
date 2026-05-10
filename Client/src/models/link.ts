export interface HeaderLink {
    path: string,
    text: string,
    active: string
    handleClick: (el: string) => void;
}

export interface LinkContext {
    links: HeaderLink[],
    handleChangeLinks: (links: HeaderLink[]) => void
}