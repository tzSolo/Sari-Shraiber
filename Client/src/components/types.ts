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

export type ImageProps = {
    text: string,
    src: string,
    alt: string
}

export type GalleryProps = {
    arrImages: ImageProps[]
}

export type CourseProps = {
    header: string,
    text: string,
    imgSrc: string,
    imgAlt: string,
    link: string
}

export type AllCoursesProps = {
    arrCourses: CourseProps[]
}

export const coursesData: AllCoursesProps = {
    arrCourses: [
        {
            header: "פוטושופ בקלות!",
            text: "עיבוד כללי מא' - ת'",
            imgSrc: "https://content.vp4.me/s0534158639_gmail_com/Content/%d7%90%d7%97%d7%a8%d7%99%20%d7%98%d7%a9%d7%98%d7%95%d7%a9%20%d7%a8%d7%a7%d7%a2.jpg",
            imgAlt: "תאומות - זלזניק",
            link: "https://click.smoove.io/ld03zgfzjynontnyyacgnsnoigfn1scnwsjyss1g4nfn.ashx"
        },
        {
            header: "WOW!",
            text: "לקסם וטאץ' מהאגדות!",
            imgSrc: "https://content.vp4.me/s0534158639_gmail_com/Content/4%20%d7%90%d7%97%d7%a8%d7%99%20%d7%97%d7%99%d7%93%d7%95%d7%93%20%d7%95%d7%a2%d7%99%d7%91%d7%95%d7%93%20%d7%90%d7%95%d7%95%d7%99%d7%a8%d7%94.jpg",
            imgAlt: "תאומות - זלזניק",
            link: "https://click.smoove.io/ld0y5gftyei1nte3ypagntnmngseaopnqfeyssogynfn.ashx"
        },
    ]
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