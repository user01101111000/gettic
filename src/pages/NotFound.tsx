import React from "react";
import { Helmet } from "react-helmet";
import { NavigateFunction, useNavigate } from "react-router";

const NotFound: () => React.JSX.Element = (): React.JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <>

        <Helmet>
            <title>Page Not Found</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Page not found." />
        </Helmet>

        <section className="flex items-center flex-col justify-center gap-4">

            <p className="text-3xl font-extrabold">Page Not Found !</p>
            <button className="px-3 py-1 rounded-md bg-orange-500 font-bold cursor-pointer hover:bg-orange-700 transition-colors duration-300 ease-in" onClick={(): void => {
                navigate("/", { replace: true });
            }}>Go home</button>

        </section>
    </>
}

export default NotFound;