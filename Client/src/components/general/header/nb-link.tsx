import { Link } from "react-router-dom";
import type { LinkProps } from "../../types";

const NavbarLink = ({ to, text }: LinkProps) => {
    return <>
        <Link to={to}>{text}</Link>
    </>
}

export default NavbarLink;