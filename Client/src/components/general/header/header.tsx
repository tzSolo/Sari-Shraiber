import { navbarLinks } from "../../types";
import Navbar from "./navbar";
import logo from "../../../images/logo.jpg";

const Header = () => {
    return <>
        <header>
            <div className="container">
                <img src={logo} alt="logo" id="logo"/>
                <Navbar {...navbarLinks} />
            </div>
        </header>
    </>
}

export default Header;