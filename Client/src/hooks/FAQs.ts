import { useState } from "react";


const useFAQs = () => {
    const [openId, setOpenId] = useState<number>();

    const handleOpen = (index: number) => {
        if (index === openId) {
            setOpenId(-1);
            return;
        }
        setOpenId(index);
    }

    return { openId, handleOpen }
}

export default useFAQs;