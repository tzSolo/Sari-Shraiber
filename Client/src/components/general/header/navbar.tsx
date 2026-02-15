import NavbarLink from "./nb-link";
import type { NavbarProps } from '../../types'

const Navbar = ({ arrLinks }: NavbarProps) => {
    return <>
        <ul>
            {arrLinks.map((link, index) => {
                return <li key={index}>
                    <NavbarLink {...link} />
                </li>
            })}
        </ul >
    </>
}

export default Navbar;