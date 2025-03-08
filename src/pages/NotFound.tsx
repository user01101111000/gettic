import React from "react";
import { NavigateFunction, replace, useNavigate } from "react-router";

const NotFound: () => React.JSX.Element = (): React.JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <section className="flex items-center flex-col justify-center gap-4">

        <h1 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">Page Not Found !</h1>
        <button className="px-3 py-1 rounded-md bg-orange-500 font-bold lg:text-2xl cursor-pointer hover:bg-orange-700 transition-colors duration-300 ease-in" onClick={(): void => {
            navigate("/", { replace: true });
        }}>Go home</button>

    </section>
}

export default NotFound;