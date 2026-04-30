import { useNavigate } from "react-router-dom";
import door from "../../../images/door.jpg";
import rightArrow from "../../../images/right-arrow.jpg";
import leftArrow from "../../../images/left-arrow.jpg";
import { useState } from "react";

const LogInOrLogOut = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLoginClick = () => {
        navigate("/login");
        setIsLoggedIn(prev => !prev);
    }

    return <>
        <div id="login" onClick={handleLoginClick}>
            <img
                src={isLoggedIn ? rightArrow : leftArrow}
                alt="state"
            />
            <img
                src={door}
                alt="login"
            />
        </div>
    </>
}

export default LogInOrLogOut;