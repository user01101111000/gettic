import React from "react";
import HomeContainer from "../containers/HomeContainer";
import useUser from "../hooks/useUser";

const Home: () => React.JSX.Element = (): React.JSX.Element => {

    const { setUser } = useUser()!;

    React.useLayoutEffect((): void => {
        setUser(null);
    }, []);

    return <HomeContainer />
};

export default Home;