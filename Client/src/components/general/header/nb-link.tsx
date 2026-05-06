import { Link } from "react-router-dom";
import type { HeaderLink } from "../../../models/link";

const NavbarLink = ({ to, text, active, handleClick }: HeaderLink) => {

    return <>
        <Link
            to={to}
            onClick={() => handleClick(to)}
            className={active === to ? "active" : ""}
        >
            {text}
        </Link>
    </>
}

export default NavbarLink;