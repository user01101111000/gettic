import React from "react";
import Title from "../components/Containers/TicketContainer/Title";
import UserTicket from "../components/Containers/TicketContainer/UserTicket";

const TicketContainer: () => React.JSX.Element = (): React.JSX.Element => {
    
    return <section className="flex flex-col items-center justify-center p-2 gap-5 lg:p-4 lg:gap-7">

        <Title />
        <UserTicket />

    </section>
};

export default TicketContainer;