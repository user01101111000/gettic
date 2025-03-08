import React from "react";
import { UserContextProvider } from "../context/UserContext";

type ProvidersProps = {
    children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps): React.JSX.Element => {
    return <React.Fragment>
        <UserContextProvider>
            {children}
        </UserContextProvider>
    </React.Fragment>;
};

export default Providers;