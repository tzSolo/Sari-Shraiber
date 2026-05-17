import copy from "../images/copyright.gif"
import heart from "../images/heart.jpg"
import wiking from "../images/wiking.jpg"
import download from "../images/download.svg"

const DownloadCourses = () => {
    return <>
        <div className="download">
            <img src={copy} alt="gif" />
            <p> לחצי על הקישורים, והקורסים אצלך במחשב :)</p>
            <p>
                שימי
                <img src={heart} alt="לב" />
                להוריד את שני הקורסים
            </p>
            <p> סבלנות
                <img src={wiking} alt="" />
                הורדת הקבצים עלולה לקחת קצת יותר זמן מהרגיל כי מדובר בקבצים כבדים.
            </p>
            <div className="download-buttons">
                <button> <img src={download} alt="download" />
                    קורס עיבוד תמונה מ א-ת
                </button>
                <button>
                    <img src={download} alt="download" />
                    קורס WOW עיבוד אומנותי
                </button>
            </div>
        </div>
    </>
}

export default DownloadCourses;