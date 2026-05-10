import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { linksContext } from "../context/linkContext";

const baseUrl = import.meta.env.VITE_BASE_URL;

const useLink = () => {
    const location = useLocation();
    const firstActive = location.pathname === "/" ? "/home" : location.pathname;
    const { links,handleChangeLinks } = useContext(linksContext);
    const [active, setActive] = useState<string>(firstActive);

    const handleClick = (name: string) => {
        setActive(name);
    };

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await fetch(`${baseUrl}/me/navigation/1`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) {
                    throw new Error("Cannot fetch links.")
                }

                const data = await response.json();

                handleChangeLinks(data.map((link: any) => ({
                    ...link,
                    active: link.path,
                    handleClick
                })
                ));
            }
            catch (e: any) {
                console.error(e.message);
            }
        }

        fetchLinks();
    }, [])

    return { links, active, handleClick };
};

export default useLink;