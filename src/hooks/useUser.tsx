import React from "react";
import { UserContextProps } from "../types/user_context";
import { UserContext } from "../context/UserContext";

const useUser: () => UserContextProps | null = (): UserContextProps | null => {
    const context: UserContextProps | null = React.useContext(UserContext);
    if (!context) throw new Error("useAuth must be used within a UserContextProvider");
    return context;
};

export default useUser;