import NavbarLink from "./nb-link";
import useLink from "../../../hooks/header-link";

const Navbar = () => {
    const { links, active, handleClick } = useLink();
    
    return <>
        <ul>
            {links.map((link, index) => {
                return <li key={index}>
                    <NavbarLink {...{ ...link, active, handleClick }} />
                </li>
            })}
        </ul >
    </>
}

export default Navbar;