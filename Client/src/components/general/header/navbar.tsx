import NavbarLink from "./nb-link";
import type { NavbarProps } from '../../types'
// import { useState } from "react";

const Navbar = ({ arrLinks }: NavbarProps) => {
    // const [activeLink, setActiveLink] = useState<HTMLElement | null>(null);

    // const activateLink = (element: any) => {
    //     if (element.tagName === 'A') {
    //         if (activeLink !== null) {
    //             activeLink.style.backgroundColor = "rgb(248 188 160)";
    //             activeLink.style.color = "rgb(163 97 101)";
    //         }
    //         setActiveLink(element.parentElement);
    //         if (activeLink) {
    //             activeLink.style.backgroundColor = "rgb(163 97 101)";
    //             activeLink.style.color = "rgb(248 188 160)";
    //         }
    //     }
    // }
    //  onClick={({ target }) => activateLink(target)}

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