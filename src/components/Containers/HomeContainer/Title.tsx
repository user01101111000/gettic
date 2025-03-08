import React from "react";

const Title: () => React.JSX.Element = (): React.JSX.Element => {
    return <article className="text-center flex flex-col gap-2 px-1.5 lg:gap-4">
        <h1 className="text-neutral-0 text-2xl font-extrabold leading-8 sm:text-3xl lg:text-4xl">Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className="text-neutral-300 text-[.8rem] sm:text-[1rem] lg:text-xl">Secure your spot at next year's biggest coding conference.</p>
    </article>
};

export default Title;