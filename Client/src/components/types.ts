export type LinkProps = {
    to: string,
    text: string
}

export type NavbarProps = {
    arrLinks: LinkProps[]
}

export const navbarLinks: NavbarProps = {
    arrLinks: [
        { to: '/gallery', text: 'גלריה' },
        { to: '/courses', text: 'קורסים' },
        { to: '/photoshop', text: 'פוטו שופ' },
        { to: '/albums', text: 'אלבומים' },
        { to: '/imageprocessing', text: 'עיבוד תמונה' },
        { to: '/contact', text: 'יצירת קשר' }
    ]
}

export type PopupProps = {
    h2: string,
    p: string
}