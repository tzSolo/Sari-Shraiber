export type Course = {
    id: number
    name:string
}

export type Buyer = {
    id: number,
    private_name:string,
    family_name:string
}

export type Entity = Course | Buyer;