import { useState } from "react";

const useLink = () => {
    const [focus, setFocus] = useState([
        { name: "בית", active: true },
        { name: "קורסים", active: false }
    ]);

    const handleClick = (el: any) => {
        setFocus(prev => prev.map(e => ({ ...e, active: e.name === el })));
    }

    return { focus, handleClick }
}

export default useLink;