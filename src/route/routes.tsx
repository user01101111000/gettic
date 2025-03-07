import { RouteObject } from "react-router";
import React from "react";
import LoadingPage from "../components/Layout/LoadingPage.tsx";

const Layout: React.LazyExoticComponent<() => React.JSX.Element> = React.lazy((): Promise<typeof import("../layouts/Layout.tsx")> => import("../layouts/Layout.tsx"));
const Home: React.LazyExoticComponent<() => React.JSX.Element> = React.lazy((): Promise<typeof import("../pages/Home.tsx")> => import("../pages/Home.tsx"));

const routes: RouteObject[] = [
    {
        path: "/home?",
        element: <React.Suspense fallback={<LoadingPage />}><Layout /></React.Suspense>,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
];


export default routes;