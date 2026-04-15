export interface Role {
    name: "user" | "admin"
}

export interface FullRole {
    role: Role,
    setRole: any
}