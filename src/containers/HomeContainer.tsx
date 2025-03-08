import React from "react";
import Title from "../components/Containers/HomeContainer/Title";
import Form from "../components/Containers/HomeContainer/Form";

const HomeContainer: () => React.JSX.Element = (): React.JSX.Element => {
    return <section className="flex flex-col items-center justify-center p-1 lg:gap-3 lg:p-4">

        <Title />
        <Form />

    </section>
};

export default HomeContainer;