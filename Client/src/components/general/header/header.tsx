import { defaultLinks } from "../../types";
import Navbar from "./navbar";
import logo from "../../../images/logo.jpg";
import door from "../../../images/door.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    }

    return <>
        <header>
            <div className="container">
                <img src={logo} alt="logo" id="logo" />
                <Navbar {...defaultLinks} />
                <img
                    src={door}
                    alt="login"
                    id="login"
                    onClick={handleLoginClick}
                />
            </div>
        </header>
    </>
}

export default Header;