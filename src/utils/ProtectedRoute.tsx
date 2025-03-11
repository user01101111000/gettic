import React from "react";
import { Navigate } from "react-router";
import useUser from "../hooks/useUser";

type ProtectedRouteProps = {
    children: React.ReactNode
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }: ProtectedRouteProps): React.JSX.Element => {
    const { user } = useUser()!;

    if (!user) return <Navigate to="/" replace/>;

    return <>{children}</>;
};

export default ProtectedRoute;