import { Link } from "react-router-dom";
import type { HeaderLink } from "../../../models/link";

const NavbarLink = ({ to, text, active, handleClick }: HeaderLink) => {

    return <>
        <Link
            to={to}
            onClick={() => handleClick(text)}
            className={active === text ? "active" : ""}
        >
            {text}
        </Link>
    </>
}

export default NavbarLink;