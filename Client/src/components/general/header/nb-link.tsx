import { Link } from "react-router-dom";
import type { LinkProps } from "../../types";

const NavbarLink = ({ to, text ,focus,handleClick}: LinkProps) => {

    return <>
        <Link
            to={to}
            onClick={() => handleClick(text)}
            className={focus.find(e => e.name === text)?.active ? "active" : ""}
        >
            {text}
        </Link>
    </>
}

export default NavbarLink;