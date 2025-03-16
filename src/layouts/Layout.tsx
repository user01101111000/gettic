import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Layout/Header";
import LoadingPage from "../components/Layout/LoadingPage";

const Layout: () => React.JSX.Element = (): React.JSX.Element => {

    return <main className="min-h-dvh w-full grid grid-rows-[auto_1fr] text-white relative">

        <figure className="absolute inset-0 w-full h-full overflow-hidden -z-50">
            <img height={"20px"} width={"20px"} className="absolute inset-0 object-cover object-center w-full h-full aspect-square" src="/images/background-desktop.webp" alt="background image" title="background image" loading="eager" />
            <img height={"20px"} width={"20px"} className="absolute top-0 left-0 w-full h-full object-cover" src={"/images/pattern-lines.svg"} alt="lines" title="lines" loading="eager" />
            <img height={"20px"} width={"20px"} className="absolute top-10 right-0 w-80" src={"/images/pattern-squiggly-line-top.svg"} alt="squiggly-line-top" title="squiggly-line-top" loading="eager" />
            <img height={"20px"} width={"20px"} className="absolute bottom-0 left-0 w-[1000px]" src={"/images/pattern-squiggly-line-bottom-desktop.svg"} alt="squiggly-line-bottom" title="squiggly-line-bottom" loading="eager" />
            <img height={"20px"} width={"20px"} className="absolute top-1/2 right-1/12 w-40" src="/images/pattern-circle.svg" alt="circle" title="circle" loading="eager" />
        </figure>

        <Header />

        <React.Suspense fallback={<LoadingPage />}>
            <Outlet />
        </React.Suspense>
    </main>
};

export default Layout;