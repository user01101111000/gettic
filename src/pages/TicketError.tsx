import React from "react"
import { Helmet } from "react-helmet";
import { NavigateFunction, useNavigate } from "react-router";

const TicketError: () => React.JSX.Element = (): React.JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <>

        <Helmet>
            <title>Ticket Error</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Ticket error." />
        </Helmet>

        <section className="flex flex-col items-center justify-center gap-3 p-2 text-center">
            <p className="lg:text-xl font-bold">Sorry, your ticket could not be created. Please try later.</p>
            <button className="px-3 py-1 rounded-md bg-orange-500 font-bold cursor-pointer hover:bg-orange-700 transition-colors duration-300 ease-in" onClick={(): void => {
                navigate("/", { replace: true });
            }}>Go home</button>
        </section>
    </>
}

export default TicketError;