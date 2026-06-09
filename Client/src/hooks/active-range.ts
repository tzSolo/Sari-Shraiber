import { useState } from "react";
import type { Frequency } from "../models/frequency";

const useActive = () => {
    const [active, setActive] = useState<Frequency>("week");

    const handleClick = (range: Frequency) => {
        setActive(range);
    };

    return { active, handleClick };
};

export default useActive;