import { type ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
    return <>
        <main>
            <div className="container">{children}</div>
        </main>
    </>
}

export default MainContainer;