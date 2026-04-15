import { createContext, useState, type ReactElement } from "react";
import type { FullRole, Role } from "../models/role";


export const roleContext = createContext<FullRole>({
    role: { name: "user" },
    setRole: () => { }
});

const RoleProvider = ({ children }: { children: ReactElement[] }) => {
    const [role, setRole] = useState<Role>({ name: "user" });

    return <>
        <roleContext.Provider value={{ role, setRole }}>
            {children}
        </roleContext.Provider>
    </>
}

export default RoleProvider;