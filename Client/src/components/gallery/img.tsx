import type { ImageProps } from "../types";

const Image = ({ text, src, alt }: ImageProps) => {
    return <>
        <div>
            <h2>{text}</h2>
            <img src={src} alt={alt} />
        </div>
    </>
}

export default Image;