import NavbarLink from "./nb-link";
import useLink from "../../../hooks/header-link";

const Navbar = () => {
    const { linksList, active, handleClick } = useLink();
    
    return <>
        <ul>
            {linksList.map((link, index) => {
                return <li key={index}>
                    <NavbarLink {...{ ...link, active, handleClick }} />
                </li>
            })}
        </ul >
    </>
}

export default Navbar;