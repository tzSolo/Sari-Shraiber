import { useContext, useEffect } from "react";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import useLink from "../hooks/header-link";

const LogOut = () => {
    const { handleUserChange } = useContext(userContext);
    const { setIsAdmin } = useLink();
    const navigate = useNavigate();

    useEffect(() => {
        handleUserChange("state", "guest");
        setIsAdmin(false);
        const timeOut = setTimeout(() => {
            navigate("/home");
        }, 2000);

        return () => clearTimeout(timeOut);
    }, [])

    return <>
        <div
            className="open-popup"
            onClick={() => navigate("/home")}
        >
            <p>היציאה בוצעה בהצלחה !</p>
        </div>
    </>
}

export default LogOut;