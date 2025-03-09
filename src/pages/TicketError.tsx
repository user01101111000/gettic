import React from "react"
import { NavigateFunction, useNavigate } from "react-router";

const TicketError: () => React.JSX.Element = (): React.JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <section className="flex flex-col items-center justify-center gap-3 p-2 text-center">
        <h1 className="lg:text-xl font-bold">Sorry, your ticket could not be created. Please try later.</h1>
        <button className="px-3 py-1 rounded-md bg-orange-500 font-bold cursor-pointer hover:bg-orange-700 transition-colors duration-300 ease-in" onClick={(): void => {
            navigate("/", { replace: true });
        }}>Go home</button>
    </section>
}

export default TicketError;