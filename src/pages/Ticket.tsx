import React from "react";
import TicketContainer from "../containers/TicketContainer";
import emailjs from '@emailjs/browser';
import { useParams } from "react-router";
import LoadingPage from "../components/Layout/LoadingPage";
import TicketError from "./TicketError";
import useUser from "../hooks/useUser";
import { Helmet } from "react-helmet";

const Ticket: () => React.JSX.Element = (): React.JSX.Element => {

    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const { user } = useUser()!;
    const { id } = useParams();

    // React.useLayoutEffect((): void => {

    //     const template_params = {
    //         "from_name": "Gettic",
    //         "full_name": user?.full_name ?? "Unknown",
    //         "to_email": user?.email ?? "unknown@gmail",
    //         "github_username": user?.github_username ?? "unknown",
    //         "ticket_id": "#" + id?.slice(0, 5)
    //     };

    //     emailjs
    //         .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, template_params, {
    //             publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    //         })
    //         .catch((error): void => {
    //             console.log('FAILED...', error);
    //             setIsError(true);
    //         })
    //         .finally((): void => setLoading(false));
    // }, []);


    return <>

        <Helmet>
            <title>Ticket</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Get your own ticket." />
        </Helmet>

        {isLoading ? <LoadingPage /> : isError ? <TicketError /> : <TicketContainer />}
    </>;
};

export default Ticket;
