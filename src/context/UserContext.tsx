import React from "react";

import { User, UserContextProps, UserContextProviderProps } from "../types/user_context";

const UserContext: React.Context<UserContextProps | null> = React.createContext<UserContextProps | null>(null);

const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }: UserContextProviderProps): React.JSX.Element => {

    const [user, setUser] = React.useState<User | null>(null);

    const data: UserContextProps = {
        user,
        setUser
    }
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
};

export { UserContextProvider, UserContext };