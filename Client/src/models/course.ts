import type { Caption } from "./caption"
import type { Image } from "./image"

export interface Course {
    id: number,
    name: string,
    price: number,
    order_num:number
    caption_id: number,
    image_id: number
}

export interface FullCourse {
    course: Course,
    caption: Caption,
    image: Image
}