import Navbar from "./navbar";
import logo from "../../../images/logo.jpg";
import LogInOrLogOut from "./log-in-out";

const Header = () => {

    return <>
        <header>
            <div className="container">
                <img src={logo} alt="logo" id="logo" />
                <Navbar />
                <LogInOrLogOut />
            </div>
        </header>
    </>
}

export default Header;