import React from "react";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
    children: React.ReactNode
};


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }: ProtectedRouteProps): React.JSX.Element => {
    const { user } = useUser()!;

    if (!user) return <Navigate to="/" replace/>;

    return <>{children}</>;
};

export default ProtectedRoute;