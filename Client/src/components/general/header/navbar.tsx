import NavbarLink from "./nb-link";
import type { NavbarProps } from '../../types'
import useLink from "../../../hooks/header-link";

const Navbar = ({ arrLinks }: NavbarProps) => {
    const { focus, handleClick } = useLink();
    return <>
        <ul>
            {arrLinks.map((link, index) => {
                return <li key={index}>
                    <NavbarLink {...{ ...link, focus, handleClick }} />
                </li>
            })}
        </ul >
    </>
}

export default Navbar;