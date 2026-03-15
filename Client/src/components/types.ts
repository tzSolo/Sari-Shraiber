export type LinkProps = {
    to: string,
    text: string
}

export type NavbarProps = {
    arrLinks: LinkProps[]
}

export const defaultLinks: NavbarProps = {
    arrLinks: [
        { to: '/', text: 'בית' },
        { to: '/courses', text: 'קורסים' }
    ]
};

export const coursesLinks: NavbarProps = {
    arrLinks: [{ to: '/photoshop', text: 'פוטו שופ' },
    { to: '/albums', text: 'אלבומים' },
    { to: '/imageprocessing', text: 'עיבוד תמונה' }
    ]
};

export type PopupProps = {
    h2: string,
    p: string
}

export type StoryProps = {
    text: string[]
}

export const theFullStory: StoryProps = {
    text: [
        'נעים להכיר, שרי שרייבר- ',
        'צלמת מקצועית במיוחד לניו בורן ',
        'עם חלום ישן.',
        'לחלום הזה קוראים - ',
        'להנגיש לכל אחת את סודות הפוטושופ.',
        'ככה בעצם הוא נולד...',
        'המקום: חנות פוטו איכות, בני ברק',
        'הזמן: ערב ראש השנה פ"ה',
        'החנות דחוסה ועמוסה',
        'אני ממתינה לקולאזים הממוגנטים שהדפסתי ללקוחות שלי',
        'ובינתיים --- מקשיבה לקולות סביבי',
        '(כן כן, ממש כמו בני ברקית😉)',
        '"אז אחרי שצילמתי את הילדים על הדשא,',
        '123'
    ]
}