interface InputData {
    name: string,
    hebrew: string,
    type?: "text" | "checkbox"
}

interface ButtonData {
    type: "submit" | "reset" | "button",
    caption: string,
    data: string
}

export interface FullForm {
    count: number,
    inputs: InputData[],
    button: ButtonData
}