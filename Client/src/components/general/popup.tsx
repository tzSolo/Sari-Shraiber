import type { PopupProps } from "../types";

const Popup = ({ h2, p }: PopupProps) => {
    return <>
        <div className="overlay">
            <div className="popup">
                <h2>{h2}</h2>
                <p>{p}</p>
            </div>
        </div>
    </>
}

export default Popup;


 {/* <Popup {...{ h2: "שרי שרייבר", p: "צלמת ..." }} /> */}