import { RouteObject } from "react-router";
import React from "react";
import LoadingPage from "../components/Layout/LoadingPage.tsx";
import ProtectedRoute from "../utils/ProtectedRoute.tsx";

const Layout: React.LazyExoticComponent<() => React.JSX.Element> = React.lazy((): Promise<typeof import("../layouts/Layout.tsx")> => import("../layouts/Layout.tsx"));
const Home: React.LazyExoticComponent<() => React.JSX.Element> = React.lazy((): Promise<typeof import("../pages/Home.tsx")> => import("../pages/Home.tsx"));
const Ticket: React.LazyExoticComponent<() => React.JSX.Element> = React.lazy((): Promise<typeof import("../pages/Ticket.tsx")> => import("../pages/Ticket.tsx"));
const NotFound: React.LazyExoticComponent<() => React.JSX.Element> = React.lazy((): Promise<typeof import("../pages/NotFound.tsx")> => import("../pages/NotFound.tsx"));


const routes: RouteObject[] = [
    {
        path: "/home?",
        element: <React.Suspense fallback={<LoadingPage />}><Layout /></React.Suspense>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "ticket/:id",
                element: <ProtectedRoute><Ticket /></ProtectedRoute>
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
];


export default routes;