import { Link } from "react-router-dom";
import type { LinkProps } from "../../types";

const NavbarLink = ({ to, text }: LinkProps) => {
    return <>
        <div>
            <Link to={to} >{text}</Link>
        </div>
    </>
}

export default NavbarLink;