import { createContext, useState, type ReactNode } from "react";
import type { Role, User, UserContext } from "../models/user";

const defaultUser: User = {
    id: 1,
    firsrt_name: "",
    last_name: "",
    email: "",
    password: "",
    role_id: 1,
    state: "guest",
    token: ""
}
const defaultRole: Role = {
    id: 1,
    name: "user"
}
const defaultHandleChange = (key: string, value: string) => {
    console.log("key :", key, " value :", value);
}

export const userContext = createContext<UserContext>({
    user: defaultUser,
    role: defaultRole,
    handleUserChange: defaultHandleChange,
    handleRoleChange: defaultHandleChange,
});

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(defaultUser);
    const [role, setRole] = useState<Role>(defaultRole);

    const handleChange = (prev: any, key: string, value: string) => {
        return {
            ...prev,
            [key]: value
        }
    }

    const handleUserChange = (key: string, value: string) => {
        setUser(prev => handleChange(prev, key, value));
    }

    const handleRoleChange = (key: string, value: string) => {
        setRole(prev => handleChange(prev, key, value));
    }

    return <>
        <userContext.Provider value={{ user, role, handleUserChange, handleRoleChange }}>
            {children}
        </userContext.Provider >
    </>
}

export default UserProvider;