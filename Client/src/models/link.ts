export interface HeaderLink {
    to: string,
    text: string,
    active: string
    handleClick: (el: string) => void;
}