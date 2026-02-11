export type LinkProps = {
    to: string,
    text: string
}

export type NavbarProps = {
    arrLinks: LinkProps[]
}

export const navbarLinks: NavbarProps = {
    arrLinks: [
        { to: 'gallery', text: 'גלריה' },
        { to: 'courses', text: 'קורסים' },
        { to: '', text: 'פוטו שופ' },
        { to: '', text: 'אלבומים' },
        { to: '', text: 'פוטו שופ' },
        { to: '', text: 'אלבומים' },
        { to: '', text: 'עיבוד תמונה' }
    ]
}

export type PopupProps = {
    h2: string,
    p: string
}