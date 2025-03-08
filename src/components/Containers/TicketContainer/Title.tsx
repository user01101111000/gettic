import React from "react";

const Title: () => React.JSX.Element = (): React.JSX.Element => {
    return <article className="text-center flex flex-col gap-2 px-1.5 lg:gap-4">

        <h1 className="text-neutral-0 text-2xl font-extrabold leading-8 sm:text-3xl lg:text-4xl">Congrats, <span className="bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text text-transparent">User!</span> Your ticket is ready.</h1>
        <p className="text-neutral-300 text-[.8rem] sm:text-[1rem] lg:text-xl">We've emailed your ticket to e88nur@gmail.com and will send updates in the run up to the event.</p>

    </article>
};

export default Title;