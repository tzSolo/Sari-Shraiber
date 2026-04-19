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
    count: number,
    inputs: InputData[],
    button: ButtonData,
    submit: (data: any) => void
}