import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Layout/Header";
import LoadingPage from "../components/Layout/LoadingPage";

const Layout: () => React.JSX.Element = (): React.JSX.Element => {

    const [isLoading, setLoading] = React.useState<boolean>(true);

    React.useLayoutEffect((): void => {
        setLoading(true);
        setTimeout((): void => {
            setLoading(false);
        }, 1000);
    }, []);


    return <main className="min-h-dvh w-full grid grid-rows-[auto_1fr] text-white relative">

        {isLoading && <LoadingPage />}

        <figure className="absolute h-full w-full bg-[url('/images/background-desktop.webp')] bg-cover bg-center inset-0 z-[-1] select-none pointer-events-none overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src={"/images/pattern-lines.svg"} alt="lines" />
            <img className="absolute top-10 right-0 w-80" src={"/images/pattern-squiggly-line-top.svg"} alt="squiggly-line-top" />
            <img className="absolute bottom-0 left-0 w-[1000px]" src={"/images/pattern-squiggly-line-bottom-desktop.svg"} alt="squiggly-line-bottom" />
            <img className="absolute top-1/2 right-1/12 w-40" src="/images/pattern-circle.svg" alt="circle" />
        </figure>

        <Header />

        <React.Suspense fallback={<LoadingPage />}>
            <Outlet />
        </React.Suspense>
    </main>
};

export default Layout;