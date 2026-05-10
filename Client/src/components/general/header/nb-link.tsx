import { Link } from "react-router-dom";
import type { HeaderLink } from "../../../models/link";

const NavbarLink = ({ path, text, active, handleClick }: HeaderLink) => {

    return <>
        <Link
            to={path}
            onClick={() => handleClick(path)}
            className={active === path ? "active" : ""}
        >
            {text}
        </Link>
    </>
}

export default NavbarLink;