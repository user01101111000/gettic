import React from "react";
import HomeContainer from "../containers/HomeContainer";
import useUser from "../hooks/useUser";
import { Helmet } from "react-helmet";

const Home: () => React.JSX.Element = (): React.JSX.Element => {

    const { setUser } = useUser()!;

    React.useLayoutEffect((): void => {
        setUser(null);
    }, []);

    return <>
        <Helmet>
            <title>Gettic</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Get your ticket now at the coding conference." />
        </Helmet>
        <HomeContainer />
    </>
};

export default Home;