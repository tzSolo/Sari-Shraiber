interface InputData {
    name: string,
    hebrew: string,
    type?: "text" | "checkbox"
}

interface ButtonData {
    type: "submit" | "reset" | "button",
    caption: string
}

export interface FullForm {
    id: string,
    count: number,
    inputs: InputData[],
    button: ButtonData
}