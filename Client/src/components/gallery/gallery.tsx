import type { GalleryProps } from "../types";
import Image from "./img";

const Gallery = ({ arrImages }: GalleryProps) => {
    return <>
        <ul>
            {arrImages.map((img, index) => {
                return <li key={index}>
                    <Image {...img} />
                </li>
            })}
        </ul>
    </>
}

export default Gallery;