import type { ReactElement } from "react";

const MainContainer = ({ children }: { children: ReactElement }) => {
    return <>
        <main>
            <div className="container">{children}</div>
        </main>
    </>
}

export default MainContainer;