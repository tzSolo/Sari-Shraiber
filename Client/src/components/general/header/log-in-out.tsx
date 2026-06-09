import { useNavigate } from "react-router-dom";
import door from "../../../images/door.jpg";
import rightArrow from "../../../images/right-arrow.svg";
import leftArrow from "../../../images/left-arrow.svg";
import { useContext } from "react";
import { userContext } from "../../../context/userContext";

const LogInOrLogOut = () => {
    const navigate = useNavigate();
    const { user } = useContext(userContext);

    const handleLogInOrOutClick = () => {
        user.state === "guest" ? navigate("/login") : navigate("/logout");
    }

    return <>
        <div  id="admin-only">
            <div id="login" onClick={handleLogInOrOutClick}>
                <img
                    src={user.state && user.state === "logged in" ? rightArrow : leftArrow}
                    alt="state"
                />
                <img
                    src={door}
                    alt="login"
                />
            </div>
            <span>כניסת מנהל בלבד</span>
        </div>
    </>
}

export default LogInOrLogOut;