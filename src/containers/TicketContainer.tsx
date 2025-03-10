import React from "react";
import Title from "../components/Containers/TicketContainer/Title";
import UserTicket from "../components/Containers/TicketContainer/UserTicket";
import LoadingPage from "../components/Layout/LoadingPage";

const TicketContainer: () => React.JSX.Element = (): React.JSX.Element => {

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useLayoutEffect((): void => {
        setIsLoading(true);
        setTimeout((): void => {
            setIsLoading(false);
        }, 700);
    }, []);

    return <section className="flex flex-col items-center justify-center p-2 gap-5 lg:p-4 lg:gap-7">

        {isLoading && <LoadingPage />}

        <Title />
        <UserTicket />

    </section>
};

export default TicketContainer;