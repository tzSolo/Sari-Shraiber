export interface User {
    id: number,
    firsrt_name: string,
    last_name: string,
    email: string,
    password: string,
    role_id: number,
    state?: "guest" | "logged in"
}

export interface Role {
    id: number,
    name: string
}

export interface UserContext {
    user: User,
    role: Role,
    handleUserChange: (key: string, value: string) => void,
    handleRoleChange: (key: string, value: string) => void
}