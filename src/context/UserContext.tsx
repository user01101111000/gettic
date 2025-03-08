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


const useUser: () => UserContextProps | null = (): UserContextProps | null => {
    const context: UserContextProps | null = React.useContext(UserContext);
    if (!context) throw new Error("useAuth must be used within a UserContextProvider");
    return context;
}


export { UserContextProvider, useUser };